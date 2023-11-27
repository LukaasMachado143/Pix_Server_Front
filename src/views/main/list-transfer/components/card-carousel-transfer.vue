<template>
  <v-card class="pa-4">
    <h3 class="mb-2">{{ data.title }}:</h3>
    <v-slide-group multiple show-arrows>
      <v-slide-item>
        <v-card color="red" width="250px" height="250px" class="mr-2 pa-1">
          <v-row no-gutters align="center">
            <span>Data:</span>
            <span>Data:</span>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-card>
</template>

<script>
export default {
  props: ['data']

}
</script>

<style></style>