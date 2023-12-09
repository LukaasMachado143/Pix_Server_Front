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
import SplineChart from "./components/spline-chart.vue";
import addCard from "./components/add-card.vue";
import setCurrency from "@/utils/setCurrency";
export default {
  components: { addCard, SplineChart },
  name: "UpdateBalanceMain",
  computed: {
    balanceAccount() {
      return this.$store.getters["userStore/userData"].balance;
    },
  },
  methods: {
    setlistTransferPage() {
      if (this.balanceAccount && this.balanceAccount >= 100) {
        this.$router.push({ name: "listTransfer" });
        this.$store.commit("snackbarStore/set", {
          message: `Só é possível adicionar salde se o mesmo estiver abaixo de ${setCurrency(
            100
          )}.`,
          type: "info",
        });
      }
    },
  },
  mounted() {
    this.setlistTransferPage();
  },
};
</script>

<style></style>