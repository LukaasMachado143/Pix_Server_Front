<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <h1 class="text-center">Logar</h1>
      <v-form v-model="valid" lazy-validation ref="form">
        <v-text-field
          v-model="login.email"
          color="blue"
          label="Email"
          append-icon="mdi-email"
          :disabled="isLoading"
          :rules="[...requiredRule, ...emailRule]"
          required
        />
        <v-text-field
          v-model="login.password"
          :type="type"
          color="blue"
          label="Senha"
          :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
          @click:append="type == 'text' ? (type = 'password') : (type = 'text')"
          :disabled="isLoading"
          :rules="[...requiredRule, ...passwordRule]"
          required
        />
      </v-form>
      <v-btn
        :disabled="!unlockBtn"
        :loading="isLoading"
        color="light-blue lighten-1"
        width="100%"
        @click="runLogin"
      >
        <span class="white--text">entrar</span>
      </v-btn>
    </v-col>
    <p
      class="text-center mt-2"
      style="cursor: pointer"
      @click="$router.push({ name: 'register' })"
    >
      Clique aqui para se cadastrar !
    </p>
  </v-row>
</template>

<script>
import UserService from "@/services/user-service.js";
export default {
  name: "LoginForm",
  data() {
    return {
      login: {
        email: null,
        password: null,
      },
      type: "password",
      valid: true,
      isLoading: false,
      requiredRule: [(v) => !!v || "Campo Obrigadtório !"],
      emailRule: [(v) => /.+@.+\..+/.test(v) || "E-mail inválido !"],
      passwordRule: [
        (v) =>
          (v && v.length >= 8) ||
          "A senha precisa ter no mínimo 8 caracteres !",
      ],
      unlockBtn: false,
      service: new UserService(),
    };
  },
  methods: {
    async validate() {
      const isValid = await this.$refs.form.validate();
      this.unlockBtn = isValid;
    },
    initialState() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
    runLogin() {
      this.isLoading = true;
      let message,
        type = null;
      this.service
        .login(this.login)
        .then((res) => {
          message = res.data.message;
          type = res.data.success ? "success" : "info";
          if (res.data.success) {
            localStorage.removeItem("pixServerData");
            localStorage.setItem(
              "pixServerData",
              JSON.stringify(res.data.data)
            );
            this.$store.commit("setAuthorized", false);
            this.initialState();
            this.$router.push({ name: "listTransfer" });
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
  },
  watch: {
    login: {
      async handler() {
        await this.validate();
      },
      deep: true,
    },
  },
};
</script>

<style></style>