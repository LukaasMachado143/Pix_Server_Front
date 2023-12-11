<template>
  <highcharts v-if="false" class="hc" :options="chartOptions" />
  <Loading-card v-else :title="chartOptions.title.text" />
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
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            color: "green",
            dataLabels: {
              enabled: false,
            },
          },
          {
            name: "Enviadas",
            data: [10, 9, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            color: "red",
            dataLabels: {
              enabled: false,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.hc {
  border-radius: 10px;
}
</style>