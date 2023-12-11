<template>
  <div>
    <Redirect-add-balance v-if="balanceAccount && balanceAccount <= 100" />
    <Carousel-main />
    <Charts-main />
  </div>
</template>

<script>
import CarouselMain from "./components/carousel-main/carousel-main.vue";
import ChartsMain from "./components/charts-main/charts-main.vue";
import RedirectAddBalance from "./components/redirect-add-balance.vue";

export default {
  components: {
    RedirectAddBalance,
    CarouselMain,
    ChartsMain,
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
