<template>
  <v-container fluid class="pa-0">
    <app-bar v-if="!disabledAppbar" />
    <div class="main-container pt-4 px-4">
      <v-row justify="center" class="mt-4" v-if="isLoading">
        <v-progress-circular indeterminate color="red" size="100" />
      </v-row>
      <router-view />
    </div>
    <Refresh-token />
  </v-container>
</template>

<script>
import appBar from "@/components/app-bar/app-bar.vue";
import UserService from "@/services/user-service.js";
import RefreshToken from "@/components/refresh-token.vue";
export default {
  components: { appBar, RefreshToken },
  data() {
    return {
      isLoading: false,
      service: new UserService(),
    };
  },
  methods: {
    setUser(email) {
      this.isLoading = true;
      this.service
        .getUser(email)
        .then((res) => {
          this.$store.commit("userStore/set", res.data.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  computed: {
    userData() {
      return this.$store.getters["userStore/userData"];
    },
    disabledAppbar() {
      return this.$route.name == "logOut";
    },
  },
  created() {
    const data = localStorage.getItem("pixServerData");
    if (!data) this.$router.push({ name: "login" });
    else {
      const email = JSON.parse(data).email;
      this.setUser(email);
    }
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  background-image: url("https://img.freepik.com/vetores-gratis/padrao-de-linha-de-grade-hexagonal-preta-para-papel-de-parede-ousado-e-industrial_1017-43002.jpg?w=996&t=st=1701088987~exp=1701089587~hmac=d0f3eb576ff7cd4cddce53b415cfeb0c8aeab502f1dc29deb1eb946aea8322bc");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>