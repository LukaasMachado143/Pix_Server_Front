<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./components/snackbar-watcher.vue";

export default {
  components: { Snackbar },
  name: "App",

  data: () => ({
    //
  }),
  created() {
    document.title = "Pix Server";
    // this.$router.push({name:'listTransfer'})
  },
};
</script>
