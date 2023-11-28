<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" sm="auto" class="pr-2">
      <add-card />
    </v-col>
    <v-col cols="12" sm="auto" class="pl-2">
      <spline-chart />
    </v-col>

  </v-row>
</template>

<script>
import SplineChart from './components/spline-chart.vue'
import addCard from './components/add-card.vue'
export default {
  components: { addCard, SplineChart },
  name: 'UpdateBalanceMain',

}
</script>

<style></style>