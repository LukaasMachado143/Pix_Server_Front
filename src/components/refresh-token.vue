<template>
  <v-dialog v-model="isOpen" width="300" persistent>
    <v-card class="pa-4">
      <h1>{{ isAuthorized }}</h1>
      <h3 class="text-center">Seu token está inválido !</h3>
      <v-form v-model="valid" lazy-validation ref="form">
        <v-text-field
          v-model="password"
          :disabled="isLoading"
          color="blue"
          label="Digite sua senha"
          :append-icon="`mdi-eye${type == 'password' ? '' : '-off'}`"
          :type="type"
          @click:append="changeTypeField"
          required
          :rules="requiredRule"
        />
      </v-form>
      <v-btn
        :disabled="!unlockBtn"
        :loading="isLoading"
        color="light-blue lighten-1"
        width="100%"
        @click="reLogin"
      >
        <span class="white--text">Validar</span>
      </v-btn>
      <v-btn
        :disabled="password ? true : false"
        color="light-blue lighten-1"
        width="100%"
        @click="logOut"
        class="mt-1"
      >
        <span class="white--text">
          <v-icon>mdi-logout</v-icon>
          Deslogar
        </span>
      </v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
import UserService from "@/services/user-service";
export default {
  data() {
    return {
      valid: true,
      isOpen: false,
      isLoading: false,
      password: null,
      type: "password",
      requiredRule: [(v) => !!v || "Campo Obrigadtório !"],
      unlockBtn: false,
      service: new UserService(),
    };
  },
  methods: {
    async validateForm() {
      return await this.$refs.form.validate();
    },
    changeTypeField() {
      this.type = this.type == "password" ? "text" : "password";
    },
    async initialState() {
      await this.$refs.form.resetValidation();
      await this.$refs.form.reset();
    },
    logOut() {
      this.$router.push({ name: "logOut" });
      this.isOpen = false;
    },
    reLogin() {
      this.isLoading = true;
      let message,
        type = null;
      const email = JSON.parse(localStorage.getItem("pixServerData")).email;
      const request = {
        email: email,
        password: this.password,
      };
      this.service
        .login(request)
        .then((res) => {
          message = res.data.message;
          type = res.data.success ? "success" : "info";
          if (res.data.success) {
            localStorage.removeItem("pixServerData");
            localStorage.setItem(
              "pixServerData",
              JSON.stringify(res.data.data)
            );
            this.$store.commit("setAuthorized", true);
            this.initialState();
            this.isOpen = false;
            this.setUser(email);
          }
        })
        .catch((error) => {
          console.log(error);
          message = error;
          type = "error";
        })
        .finally(() => {
          this.isLoading = false;
          this.$store.commit("snackbarStore/set", {
            message,
            type,
          });
        });
    },
    setUser(email) {
      this.isLoading = true;
      this.service
        .getUser(email)
        .then((res) => {
          this.$store.commit("userStore/set", res.data.data);
          if (this.$route.name != "listTransfer")
            this.$router.push({ name: "listTransfer" });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    isAuthorized() {
      return this.$store.getters.checkAuthorized;
    },
  },
  watch: {
    password: {
      async handler() {
        this.unlockBtn = await this.validateForm();
      },
      deep: true,
    },
    isAuthorized: {
      handler(value) {
        this.isOpen = value;
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>