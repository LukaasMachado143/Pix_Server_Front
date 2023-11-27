<template>
  <v-row no-gutters justify="center">
    <div class="animated-text">
      <h1>S</h1>
      <h1>A</h1>
      <h1>I</h1>
      <h1>N</h1>
      <h1>D</h1>
      <h1>O</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
    </div>
  </v-row>
</template>

<script>
export default {
  methods: {
    animatedLetters() {
      alert('deslogando !')
    }
  },
  created() {
    this.animatedLetters()
  }
}
</script>

<style lang="scss" scoped>
.animated-text {
  color: white;
  display: flex;

  h1 {
    animation: jump 0.5s infinite alternate;
  }
}

@keyframes jump {
  to {
    transform: translateY(-10px);
  }
}
</style>