<template>
  <v-card class="pa-4" width="300px">
    <h2 class="text-center mb-2">Adicionar Saldo</h2>
    <v-text-field outlined dense hide-details="auto" prefix="R$" :suffix="balance ? '' : ',00'" v-model="balance"
      type="number" min="0" class="mb-4" />
    <v-btn color="light-blue lighten-1" width="100%">
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      balance: null,
    }
  }

}
</script>

<style></style>