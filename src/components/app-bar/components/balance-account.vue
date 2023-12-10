<template>
  <v-row no-gutters justify="end" align="center" class="mr-4">
    <v-icon color="white" class="mr-1"> mdi-wallet </v-icon>
    <span class="white--text">{{ setCurrency(balanceValue) }}</span>
  </v-row>
</template>

<script>
import setCurrency from "@/utils/setCurrency";

export default {
  computed: {
    balanceValue() {
      return this.$store.getters["userStore/balance"];
    },
  },
  methods: {
    setCurrency,
  },
};
</script>

<style>
</style>    