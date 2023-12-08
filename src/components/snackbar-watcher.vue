<template>
  <v-snackbar v-model="isOpen" :color="snackbarData.type">{{
    snackbarData.message
  }}</v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    snackbarData() {
      return this.$store.getters["snackbarStore/snackbarData"];
    },
  },
  watch: {
    isOpen: {
      handler(value) {
        if (!value) {
          this.$store.commit("snackbarStore/reset");
        }
      },
      immediate: true,
      deep: true,
    },
    snackbarData: {
      handler(value) {
        this.isOpen = value.message && value.type ? true : false;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style>
</style>
