<template>
  <v-card class="pa-1 pb-5 hc" height="100%">
    <h3 class="text-center">{{ title }}</h3>
    <v-row justify="center" class="mt-4">
      <v-progress-circular indeterminate color="red" size="100" />
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.hc {
  border-radius: 10px;
}
</style>