<template>
  <div>
    <redirect-add-balance />
    <card-carousel-transfer v-for="transfers, index in transfersList" :key="index"
      :class="index == transfersList.length - 1 ? '' : 'mb-4'" :data="transfers" />
    <v-row no-gutters justify="center" class="mt-4 px-4">
      <v-col cols="12" sm="6" class="pr-2">
        <column-chart />
      </v-col>
      <v-col cols="12" sm="6" class="pl-2">
        <column-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardCarouselTransfer from './components/card-carousel-transfer.vue'
import ColumnChart from './components/charts/column-chart.vue'
import RedirectAddBalance from './components/redirect-add-balance.vue'

export default {
  components: { CardCarouselTransfer, RedirectAddBalance, ColumnChart },
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

    }
  }
}
</script>

<style></style>
