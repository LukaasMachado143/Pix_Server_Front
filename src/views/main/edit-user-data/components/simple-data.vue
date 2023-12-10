<template>
  <v-card class="pa-4" height="100%">
    <v-text-field
      v-model="userData.email"
      :disabled="isLoading"
      color="blue"
      label="Email"
      append-icon="mdi-email"
    />
    <v-text-field
      v-model="userData.name"
      :disabled="isLoading"
      color="blue"
      label="Nome"
      append-icon="mdi-account"
    />
    <v-text-field
      v-model="userData.pixKey"
      :disabled="isLoading"
      color="blue"
      label="Chave Pix"
      append-icon="mdi-key"
    />
    <v-text-field
      v-model="userData.phone"
      :disabled="isLoading"
      color="blue"
      label="Telefone"
      append-icon="mdi-phone"
    />
    <v-btn
      :disabled="!unlockBtn"
      :loading="isLoading"
      color="light-blue lighten-1"
      width="100%"
      @click="updateData"
    >
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
import UserService from "@/services/user-service.js";
export default {
  data() {
    return {
      isLoading: false,
      userData: {
        email: null,
        name: null,
        pixKey: null,
        phone: null,
      },
      unlockBtn: false,
      servie: new UserService(),
    };
  },
  methods: {
    getuserData() {
      const userStoreData = this.$store.getters["userStore/userData"];
      this.userData.email = userStoreData.email;
      this.userData.name = userStoreData.name;
      this.userData.pixKey = userStoreData.pixKey;
      this.userData.phone = userStoreData.phone;
    },
    compareDataToDiferents(newValue) {
      const userStoreData = this.$store.getters["userStore/userData"];
      const oldUserData = {
        email: userStoreData.email,
        name: userStoreData.name,
        pixKey: userStoreData.pixKey,
        phone: userStoreData.phone,
      };
      const oldString = JSON.stringify(oldUserData);
      const newString = JSON.stringify(newValue);
      return oldString !== newString;
    },

    updateData() {
      this.isLoading = true;
      const id = this.$store.getters["userStore/id"]
      let message,
        type = null;
      this.servie
        .updateSimple(id, this.userData)
        .then((res) => {
          console.log(res);
          message = res.data.message;
          if (res.data.success) {
            this.$store.commit("userStore/simpleData", this.userData);
            type = "success";
            this.unlockBtn = false;
          } else {
            type = "info";
            this.getuserData();
          }
        })
        .catch((error) => {
          console.log(error);
          this.getuserData();
          message = error;
          type = "error";
        })
        .finally(() => {
          this.isLoading = false;
          this.$store.commit("snackbarStore/set", { message, type });
        });
    },
  },
  watch: {
    userData: {
      handler(value) {
        this.unlockBtn = this.compareDataToDiferents(value);
      },
      deep: true,
    },
  },
  mounted() {
    this.getuserData();
  },
};
</script>

<style>
</style>