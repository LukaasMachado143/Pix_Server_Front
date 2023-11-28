<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  created() {
    document.title = "Pix Server"
    this.$router.push({name:'listTransfer'})
  }
};
</script>
