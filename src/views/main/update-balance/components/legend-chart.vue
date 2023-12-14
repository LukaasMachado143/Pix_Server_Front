<template>
  <v-card class="pa-2">
    <h3 class="text-center">Legenda</h3>
    <v-row no-gutters justify="center" class="gap-4">
      <v-col cols="auto">
        <v-row no-gutters justify="center" align="center" class="gap-2">
          <div class="dot color-blue" />
          <span>Valores recebidos do <strong>SISTEMA</strong></span>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <v-row no-gutters justify="center" align="center" class="gap-2">
          <div class="dot color-green" />
          <span>Valores recebidos de <strong>OUTROS USUÁRIOS</strong></span>
        </v-row>
      </v-col>
      <v-col cols="auto">
        <v-row no-gutters justify="center" align="center" class="gap-2">
          <div class="dot color-red" />
          <span>Valores transferido para <strong>OUTROS USUÁRIOS</strong></span>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>
<style lang="scss" scoped>
.dot {
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.color-blue {
  background-color: blue;
}
.color-green {
  background-color: green;
}
.color-red {
  background-color: red;
}
.gap-4 {
  gap: 16px;
}
.gap-2 {
  gap: 8px;
}
</style>