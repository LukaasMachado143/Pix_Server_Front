<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <h1 class="text-center">Registrar-se</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="user.email"
          color="blue"
          label="Email"
          append-icon="mdi-email"
          required
          :rules="[...requiredRule, ...emailRule]"
          :disabled="isLoading"
        />
        <v-text-field
          v-model="user.name"
          color="blue"
          label="Nome"
          append-icon="mdi-account"
          required
          :rules="requiredRule"
          :disabled="isLoading"
        />
        <v-text-field
          v-model="user.pixKey"
          color="blue"
          label="Chave Pix"
          append-icon="mdi-key"
          required
          :rules="requiredRule"
          :disabled="isLoading"
        />
        <v-text-field
          v-model="user.password"
          :type="type"
          color="blue"
          label="Senha"
          required
          :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
          @click:append="type == 'text' ? (type = 'password') : (type = 'text')"
          :rules="[...requiredRule, ...passwordRule]"
          :disabled="isLoading"
        />
        <v-text-field
          v-model="confirmPassword"
          :type="type"
          color="blue"
          label="Confirme sua senha"
          required
          :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
          :rules="[...requiredRule, ...confirmPasswordRule]"
          :disabled="isLoading"
        />
      </v-form>
      <v-btn
        :disabled="!unlockBtn"
        :loading="isLoading"
        color="light-blue lighten-1"
        width="100%"
        @click="createUser"
      >
        <span class="white--text">cadastrar</span>
      </v-btn>
      <p
        class="text-center mt-2"
        style="cursor: pointer"
        @click="$router.push({ name: 'login' })"
      >
        Clique aqui para se entrar !
      </p>
    </v-col>
  </v-row>
</template>
  
<script>
import UserService from "@/services/user-service.js";
export default {
  name: "RegisterForm",
  data() {
    return {
      valid: true,
      user: {
        email: null,
        name: null,
        pixKey: null,
        password: null,
      },
      confirmPassword: null,
      requiredRule: [(v) => !!v || "Campo Obrigadtório !"],
      emailRule: [(v) => /.+@.+\..+/.test(v) || "E-mail inválido !"],
      passwordRule: [
        (v) =>
          (v && v.length >= 8) ||
          "A senha precisa ter no mínimo 8 caracteres !",
      ],
      confirmPasswordRule: [
        (v) => v == this.user.password || "Senhas não conferem !",
      ],
      type: "password",
      unlockBtn: false,
      isLoading: false,
      service: new UserService(),
    };
  },
  methods: {
    async validate() {
      const isValid = await this.$refs.form.validate();
      this.unlockBtn = isValid;
    },

    async initialState() {
      await this.$refs.form.reset();
      // await this.$refs.form.resetValidation();
    },

    createUser() {
      this.isLoading = true;
      let message,
        type = null;
      this.service
        .createUser(this.user)
        .then((res) => {
          message = res.data.message;
          if (res.status == 201) {
            this.initialState();
            type = "success";
            this.$router.push({ name: "login" });
          } else {
            type = "info";
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
    user: {
      async handler() {
        await this.validate();
      },
      deep: true,
    },
    confirmPassword: {
      async handler() {
        await this.validate();
      },
      deep: true,
    },
  },
};
</script>
  
<style></style>