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
          type: "column",
        },
        title: {
          text: "Valor Acumulado",
        },
        xAxis: {
          visible: false,
        },
        yAxis: {
          visible: false,
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
          enabled: false,
        },
        series: [
          {
            name: "Recebidas",
            data: [5.2],
            color: "green",
            dataLabels: {
              enabled: true,
              formatter: function () {
                return setCurrency(this.y);
              },
              align: "center",
              verticalAlign: "top",
              y: -20,
            },
          },
          {
            name: "Enviadas",
            data: [5.2],
            color: "red",
            dataLabels: {
              enabled: true,
              formatter: function () {
                return setCurrency(this.y);
              },
              align: "center",
              verticalAlign: "top",
              y: -20,
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