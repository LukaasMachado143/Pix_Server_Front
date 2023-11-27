<template>
  <v-container fluid class="pa-0">
    <div class="main-container">
      <router-view />
    </div>
  </v-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main-container {
  background-image: url("https://img.freepik.com/vetores-gratis/padrao-de-linha-de-grade-hexagonal-preta-para-papel-de-parede-ousado-e-industrial_1017-43002.jpg?w=996&t=st=1701088987~exp=1701089587~hmac=d0f3eb576ff7cd4cddce53b415cfeb0c8aeab502f1dc29deb1eb946aea8322bc");
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