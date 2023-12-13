<template>
  <v-card class="pa-4" width="300px">
    <h2 class="text-center mb-2">Adicionar Saldo</h2>
    <v-text-field
      outlined
      dense
      hide-details="auto"
      prefix="R$"
      :suffix="balance ? '' : ',00'"
      :disabled="isLoading"
      v-model="balance"
      type="number"
      min="0"
      class="mb-4"
    />
    <v-btn
      :loading="isLoading"
      :disabled="!balance"
      color="light-blue lighten-1"
      width="100%"
      @click="updateBalance"
    >
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
import UserService from "@/services/user-service";
export default {
  data() {
    return {
      balance: null,
      isLoading: false,
      service: new UserService(),
    };
  },

  methods: {
    updateBalance() {
      this.isLoading = true;
      const id = this.$store.getters["userStore/id"];
      let message,
        type = null;
      this.service
        .updateBalance(id, this.balance)
        .then((res) => {
          console.log(res);
          message = res.data.message;
          type = res.data.success ? "success" : "info";
          if (res.data.success) {
            this.balance = null;
            setTimeout(() => {
              this.$router.push({ name: "listTransfer" });
            }, 1000);
          }
        })
        .catch((error) => {
          console.log(error);
          message = error;
          type = "error";
        })
        .finally(() => {
          this.isLoading = false;
          this.$store.commit("snackbarStore/set", { message, type });
        });
    },
  },
};
</script>

<style></style>