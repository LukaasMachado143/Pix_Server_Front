<template>
  <div class="main-container">
    <h1 class="white--text">Pix Server</h1>
    <v-card elevation="24" class="pa-4 mt-10" width="350">
      <login-form />
    </v-card>
  </div>
</template>

<script>
import LoginForm from './components/login-form.vue'
export default {
  components: { LoginForm }

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