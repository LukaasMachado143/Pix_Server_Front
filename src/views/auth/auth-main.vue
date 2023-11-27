<template>
  <div class="main-container">
    <v-card elevation="24" class="pa-4 mt-10" width="350" color="grey lighten-4">
      <router-view />
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
    }
  }

}
</script>

<style lang="scss" scoped>
.main-container {
  background-image: url("https://png.pngtree.com/thumb_back/fw800/background/20190718/pngtree-modern-dark-background-with-shine-hexagon-steel-design-image_283323.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>