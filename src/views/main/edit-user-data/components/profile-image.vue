<template>
  <v-card class="pa-4" height="100%">
    <v-row no-gutters class="mb-4">
      <v-col align="center" cols="12" sm="6" class="pr-2">
        <h3>Atual</h3>
        <v-img
          :src="profileImageUrl"
          style="width: 150px; height: 150px; border-radius: 50%"
        ></v-img>
      </v-col>
      <v-col
        align="center"
        cols="12"
        sm="6"
        class="pl-2"
        style="cursor: pointer"
      >
        <v-row no-gutters align="center" justify="center">
          <h3 class="mr-4">Futura</h3>
          <v-icon v-if="selectedImage" @click="resetSelectedImage" color="red"
            >mdi-delete-empty</v-icon
          >
        </v-row>
        <v-img
          @click="openFileInput"
          ref="futureImage"
          :src="url"
          style="width: 150px; height: 150px; border-radius: 50%"
        ></v-img>
      </v-col>
    </v-row>
    <input
      type="file"
      id="fileInput"
      ref="fileInput"
      @change="handleFileChange($event)"
      style="display: none"
      value="selectedImage"
    />
    <!--   -->
    <v-btn
      :disabled="!selectedImage"
      :loading="isLoading"
      color="light-blue lighten-1"
      width="100%"
      @click="saveNewImage"
    >
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
import UserService from "@/services/user-service";
export default {
  data() {
    return {
      selectedImage: null,
      url: "https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain",
      isLoading: false,
      service: new UserService(),
    };
  },
  computed: {
    profileImageUrl() {
      return this.$store.getters["userStore/profileImageUrl"];
    },
    id() {
      return this.$store.getters["userStore/id"];
    },
  },
  methods: {
    openFileInput() {
      if (!this.isLoading) this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedImage = event.target.files[0];
      if (this.selectedImage)
        this.url = URL.createObjectURL(this.selectedImage);
    },
    resetSelectedImage() {
      this.selectedImage = null;
      this.url =
        "https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain";
    },
    saveNewImage() {
      this.isLoading = true;
      let message,
        type = null;
      const formData = new FormData();
      formData.append("file", this.selectedImage);
      this.service
        .updateProfileImage(this.id, formData)
        .then((res) => {
          console.log(res);
          message = res.data.message;
          type = res.data.success ? "success" : "info";
          if (res.data.success) {
            this.$store.commit(
              "userStore/profileImageUrl",
              res.data.data.location
            );
            this.resetSelectedImage();
          }
        })
        .catch((error) => {
          console.log(error);
          message = error;
          type = "error";
        })
        .finally(() => {
          this.isLoading = false;
          this.$store.commit("snackbarStore/set", { message, type });
        });
    },
  },
};
</script>