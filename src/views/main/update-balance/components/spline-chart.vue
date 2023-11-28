<template>
  <highcharts class="hc" :options="chartOptions" />
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
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'spline',
        },
        title: {
          text: 'Histórico de Saldo'
        },
        xAxis: {
          visible: false
        },
        yAxis: {
          title: {
            text: ''
          },
          labels: {
            formatter: function () {
              return setCurrency(this.value);
            }
          }
        },
        tooltip: {
          enabled: true,
          formatter: function () {
            return setCurrency(this.y);
          }
        },
        series: [{
          name: 'Histórico',
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          color: 'blue',
          dataLabels: {
            enabled: false,
          }
        }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hc {
  border-radius: 10px;
}
</style>