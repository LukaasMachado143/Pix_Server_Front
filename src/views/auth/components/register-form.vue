<template>
  <v-row no-gutters justify="center">
    <v-col cols="12">
      <h1 class="text-center">Registrar-se</h1>
      <v-text-field v-model="login.email" color="blue" label="Email" append-icon="mdi-email" />
      <v-text-field v-model="login.username" color="blue" label="Usuário" append-icon="mdi-account" />
      <v-text-field v-model="login.password" :type="type" color="blue" label="Senha"
        :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'"
        @click:append="type == 'text' ? type = 'password' : type = 'text'" />
      <v-text-field v-model="confirmPassword" :type="type" color="blue" label="Confirme sua senha"
        :append-icon="type == 'text' ? 'mdi-eye-closed' : 'mdi-eye'" />
      <v-btn color="light-blue lighten-1" width="100%">
        <span class="white--text">cadastrar</span>
      </v-btn>
      <p class="text-center mt-2" style="cursor: pointer;" @click="$router.push({ name: 'login' })">
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
      login: {
        email: null,
        username: null,
        password: null,
      },
      confirmPassword: null,
      type: "password"
    }
  },

}
</script>
  
<style></style>