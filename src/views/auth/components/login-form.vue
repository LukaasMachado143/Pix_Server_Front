<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <h1 class="text-center">Login</h1>
      <v-text-field v-model="login.email" color="blue" label="Email" append-icon="mdi-email" />
      <v-text-field v-model="login.password" :type="type" color="blue" label="Senha"
        :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
        @click:append="type == 'text' ? type = 'password' : type = 'text'" />
      <v-btn color="light-blue lighten-1" width="100%">
        <span class="white--text">entrar</span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: {
        email: null,
        password: null,
      },
      type: "password"
    }
  },

}
</script>

<style></style>