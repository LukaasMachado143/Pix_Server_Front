<template>
  <div>
    <redirect-add-balance v-if="balanceAccount && balanceAccount <= 100" />
    <Carousel-main />
    <v-row no-gutters justify="center" class="mt-4 px-4">
      <v-col cols="12" sm="6" class="pr-2">
        <column-chart />
      </v-col>
      <v-col cols="12" sm="6" class="pl-2">
        <spline-chart />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CarouselMain from "./components/carousel-main/carousel-main.vue";
import ColumnChart from "./components/charts/column-chart.vue";
import SplineChart from "./components/charts/spline-chart.vue";
import RedirectAddBalance from "./components/redirect-add-balance.vue";

export default {
  components: {
    RedirectAddBalance,
    ColumnChart,
    SplineChart,
    CarouselMain,
  },
  data() {
    return {};
  },
  computed: {
    balanceAccount() {
      return this.$store.getters["userStore/balance"];
    },
  },
};
</script>
