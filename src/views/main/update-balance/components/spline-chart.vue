<template>
  <div>
    <Loading-chart-card v-if="isLoading" :title="chartOptions.title.text" />
    <highcharts v-else class="hc" :options="chartOptions" />
    <Legend-chart class="mt-2" />
  </div>
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
import LoadingChartCard from "@/components/loading-chart-card.vue";
import TransferService from "@/services/transfer-service";
import LegendChart from "./legend-chart.vue";
export default {
  components: { LoadingChartCard, LegendChart },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Histórico de Saldo",
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
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "Histórico",
            data: [],
            color: "gray",
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
    getData(pixKey) {
      this.isLoading = true;
      let message,
        type = null;

      this.service
        .getChartHistoryAccount(pixKey)
        .then((res) => {
          console.log(res);
          message = res.data.message;
          type = res.data.success ? "success" : "info";
          if (res.data.success)
            this.chartOptions.series[0].data = res.data.data;
        })
        .catch((error) => {
          console.log(error);
          message = error;
          type = "error";
        })
        .finally(() => {
          this.isLoading = false;
          this.$store.commit("snackbarStore/set", { message, type });
        });
    },
  },
  watch: {
    pixKey: {
      handler(value) {
        this.getData(value);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hc {
  border-radius: 10px;
}
</style>