<template>
  <Loading-card v-if="isLoading" :title="chartOptions.title.text" />
  <highcharts v-else class="hc" :options="chartOptions" />
</template>

<script>
import Highcharts from "highcharts";

// Exporta dados em PNG, JPEG, PDF, SVG, imprime e visualiza tela cheia
import exportingInit from "highcharts/modules/exporting";
exportingInit(Highcharts);

// Exporta dados CSV, XLS, e muda visualização por tabela
import exportData from "highcharts/modules/export-data";
exportData(Highcharts);

import HighchartsMore from "highcharts/highcharts-more";
HighchartsMore(Highcharts);

// When chart have no data
import noData from "highcharts/modules/no-data-to-display";
noData(Highcharts);
import setCurrency from "@/utils/setCurrency";
import LoadingCard from "./loading-card.vue";
import TransferService from "@/services/transfer-service.js";

export default {
  components: { LoadingCard },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Histórico de Transações",
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          title: {
            text: "",
          },
          labels: {
            formatter: function () {
              return setCurrency(this.value);
            },
          },
        },
        tooltip: {
          enabled: true,
          formatter: function () {
            return setCurrency(this.y);
          },
        },
        series: [
          {
            name: "Recebidas",
            data: [],
            color: "green",
            dataLabels: {
              enabled: false,
            },
          },
          {
            name: "Enviadas",
            data: [],
            color: "red",
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
      isLoading: false,
      service: new TransferService(),
    };
  },
  computed: {
    pixKey() {
      return this.$store.getters["userStore/pixKey"];
    },
  },
  methods: {
    getChartHistory() {
      this.isLoading = true;
      this.service
        .getChartHistory(this.pixKey)
        .then((res) => {
          if (res.data.success) {
            this.chartOptions.series[0].data = res.data.data.received;
            this.chartOptions.series[1].data = res.data.data.sended;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    pixKey: {
      handler(value) {
        if (value) this.getChartHistory();
      },
    },
  },

  mounted() {
    if (this.pixKey) this.getChartHistory();
  },
};
</script>

<style lang="scss" scoped>
.hc {
  border-radius: 10px;
}
</style>