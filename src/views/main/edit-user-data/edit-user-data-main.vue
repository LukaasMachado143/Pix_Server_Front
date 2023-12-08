<template>
  <v-container fluid>
    <h2 class="white--text text-center mb-4">Atualizar Dados</h2>
    <v-row no-gutters justify="center" style="gap: 32px">
      <Simple-data />
      <Password-change />
      <Profile-image />
    </v-row>
  </v-container>
</template>

<script>
import PasswordChange from "./components/password-change.vue";
import ProfileImage from "./components/profile-image.vue";
import SimpleData from "./components/simple-data.vue";
export default {
  components: { SimpleData, PasswordChange, ProfileImage },
};
</script>