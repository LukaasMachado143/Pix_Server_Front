<template>
  <v-list>
    <v-list-item v-for="(page, index) in list" :key="index">
      <v-list-item-title @click="go(page.to)" style="cursor: pointer">
        <v-row no-gutters align="end">
          <v-icon class="mr-2">
            {{ page.icon }}
          </v-icon>
          {{ page.title }}
        </v-row>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    go(to) {
      if (this.$route.name != to) this.$router.push({ name: to });
      else
        this.$store.commit("snackbarStore/set", {
          message: "Você está nessa página !",
          type: "info",
        });
    },
  },
};
</script>

<style></style>