<template>
  <v-card class="pa-4 mt-16" min-width="500px">
    <h2 class="text-center">Editar dados</h2>
    <v-text-field color="blue" label="Email" append-icon="mdi-email" />
    <v-text-field color="blue" label="Usuário" append-icon="mdi-account" />
    <v-text-field color="blue" label="Chave Pix" append-icon="mdi-key" />
    <v-text-field color="blue" label="Senha" append-icon="mdi-lock" />
    <v-file-input color="blue" label="Foto de Perfil" append-icon="mdi-image-edit" />
    <v-btn color="light-blue lighten-1" width="100%">
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style></style>