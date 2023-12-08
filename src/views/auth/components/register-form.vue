<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <h1 class="text-center">Registrar-se</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="login.email"
          color="blue"
          label="Email"
          append-icon="mdi-email"
          required
          :rules="[...requiredRule, ...emailRule]"
        />
        <v-text-field
          v-model="login.name"
          color="blue"
          label="Usuário"
          append-icon="mdi-account"
          required
          :rules="requiredRule"
        />
        <v-text-field
          v-model="login.pixKey"
          color="blue"
          label="Chave Pix"
          append-icon="mdi-key"
          required
          :rules="requiredRule"
        />
        <v-text-field
          v-model="login.password"
          :type="type"
          color="blue"
          label="Senha"
          required
          :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
          @click:append="type == 'text' ? (type = 'password') : (type = 'text')"
          :rules="[...requiredRule, ...passwordRule]"
        />
        <v-text-field
          v-model="login.confirmPassword"
          :type="type"
          color="blue"
          label="Confirme sua senha"
          required
          :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
          :rules="[...requiredRule, ...confirmPasswordRule]"
        />
        <v-btn :disabled="!unlockBtn" color="light-blue lighten-1" width="100%">
          <span class="white--text">cadastrar</span>
        </v-btn>
      </v-form>
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
export default {
  name: "RegisterForm",
  data() {
    return {
      valid: true,
      login: {
        email: null,
        name: null,
        pixKey: null,
        password: null,
        confirmPassword: null,
      },
      requiredRule: [(v) => !!v || "Campo Obrigadtório !"],
      emailRule: [(v) => /.+@.+\..+/.test(v) || "E-mail inválido !"],
      passwordRule: [
        (v) =>
          (v && v.length >= 8) ||
          "A senha precisa ter no mínimo 8 caracteres !",
      ],
      confirmPasswordRule: [
        (v) => v == this.login.password || "Senhas não conferem !",
      ],

      type: "password",
      unlockBtn: false,
    };
  },
  methods: {
    async validate() {
      const isValid = await this.$refs.form.validate();
      console.log(isValid);
      this.unlockBtn = isValid;
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