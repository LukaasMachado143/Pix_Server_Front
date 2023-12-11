<template>
  <v-row no-gutters justify="center" class="mt-4 px-4">
    <v-col cols="12" sm="6" class="pr-2">
      <Column-chart />
    </v-col>
    <v-col cols="12" sm="6" class="pl-2">
      <Spline-chart />
    </v-col>
  </v-row>
</template>

<script>
import ColumnChart from "./components/column-chart.vue";
import SplineChart from "./components/spline-chart.vue";
export default {
  components: { ColumnChart, SplineChart },
};
</script>

<style>
</style>