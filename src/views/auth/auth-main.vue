<template>
  <div class="main-container">
    <h1>Pix Server</h1>
    <login-form />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>