<template>
  <v-card class="pa-4" height="100%">
    <v-row no-gutters class="mb-4">
      <v-col align="center" cols="12" sm="6" class="pr-2">
        <h3>Atual</h3>
        <v-img
          src="https://randomuser.me/api/portraits/women/85.jpg"
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
    <v-btn :disabled="!selectedImage" color="light-blue lighten-1" width="100%">
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      selectedImage: null,
      url: "https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain",
    };
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.selectedImage = event.target.files[0];
      this.url = URL.createObjectURL(this.selectedImage);
    },
    resetSelectedImage() {
      this.selectedImage = null;
      this.url =
        "https://th.bing.com/th/id/OIP.hcRhDT8KVqzySjYJmBhlzgHaHa?rs=1&pid=ImgDetMain";
    },
  },
};
</script>