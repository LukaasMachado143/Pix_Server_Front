<template>
  <v-row no-gutters align="center">
    <v-icon color="green" size="50" class="mr-2" @click="$router.push({ name: 'updateBalance' })">
      mdi-plus-box
    </v-icon>
    <h3 class="white--text">Adicionar Saldo ...</h3>
  </v-row>
</template>

<script>
