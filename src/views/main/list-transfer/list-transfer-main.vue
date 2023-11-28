<template>
  <div>
    <redirect-add-balance />
    <card-carousel-transfer v-for="transfers, index in transfersList" :key="index"
      :class="index == transfersList.length - 1 ? '' : 'mb-4'" :data="transfers" />
    <highcharts class="hc" :options="chartOptions" />
  </div>
</template>

<script>
import CardCarouselTransfer from './components/card-carousel-transfer.vue'
import RedirectAddBalance from './components/redirect-add-balance.vue'
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
export default {
  components: { CardCarouselTransfer, RedirectAddBalance },
  data() {
    return {
      transfersList: [
        {
          title: 'Recebidas',
          type: "recived",
          list: [
            { date: '2023-11-27T00:01:00', value: 150 },
            { date: '2023-11-27T00:01:00', value: 200 },
            { date: '2023-11-27T00:01:00', value: 10 },
            { date: '2023-11-27T00:01:00', value: 63 },
            { date: '2023-11-27T00:01:00', value: 150 },
            { date: '2023-11-27T00:01:00', value: 856 },
            { date: '2023-11-27T00:01:00', value: 45 },
            { date: '2023-11-27T00:01:00', value: 4 },
          ]
        },
        {
          title: 'Enviadas',
          type: "sended",
          list: [
            { date: '2023-11-27T00:01:00', value: 12 },
            { date: '2023-11-27T00:01:00', value: 1 },
            { date: '2023-11-27T00:01:00', value: 150 },
            { date: '2023-11-27T00:01:00', value: 150 },
            { date: '2023-11-27T00:01:00', value: 152310 },
            { date: '2023-11-27T00:01:00', value: 2 },
            { date: '2023-11-27T00:01:00', value: 2232 },
            { date: '2023-11-27T00:01:00', value: 224 },
          ]
        },

      ],
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Monthly Average Temperature'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
            description: 'Months of the year'
          }
        },
        yAxis: {
          title: {
            text: 'Temperature'
          },
          labels: {
            format: '{value}°'
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: [{
          name: 'Tokyo',
          marker: {
            symbol: 'square'
          },
          data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
            marker: {
              symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
            },
            accessibility: {
              description: 'Sunny symbol, this is the warmest point in the chart.'
            }
          }, 22.8, 17.5, 12.1, 7.6]

        }, {
          name: 'Bergen',
          marker: {
            symbol: 'diamond'
          },
          data: [{
            y: 1.5,
            marker: {
              symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
            },
            accessibility: {
              description: 'Snowy symbol, this is the coldest point in the chart.'
            }
          }, 1.6, 3.3, 5.9, 10.5, 13.5, 14.5, 14.4, 11.5, 8.7, 4.7, 2.6]
        }]
      }
    }
  }
}
</script>

<style></style>
