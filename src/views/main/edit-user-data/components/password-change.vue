<template>
  <v-card class="pa-4" height="100%">
    <v-form v-model="valid" lazy-validation ref="form">
      <v-text-field
        v-model="request.oldPassword"
        :disabled="isLoading"
        color="blue"
        label="Senha Antiga"
        :append-icon="`mdi-eye${type == 'password' ? '' : '-off'}`"
        :type="type"
        @click:append="changeTypeField"
        required
        :rules="requiredRule"
      />
      <v-text-field
        v-model="request.newPassword"
        :disabled="isLoading"
        color="blue"
        label="Nova Senha"
        :append-icon="`mdi-eye${type == 'password' ? '' : '-off'}`"
        :type="type"
        @click:append="changeTypeField"
        required
        :rules="[...requiredRule, ...newPasswordRule]"
      />
    </v-form>
    <v-btn
      :disabled="!unlockBtn"
      :loading="isLoading"
      color="light-blue lighten-1"
      width="100%"
      @click="updatePassword"
    >
      <span class="white--text">Salvar</span>
    </v-btn>
  </v-card>
</template>

<script>
import UserService from "@/services/user-service.js";
export default {
  data() {
    return {
      request: {
        oldPassword: null,
        newPassword: null,
      },
      isLoading: false,
      valid: true,
      requiredRule: [(v) => !!v || "Campo Obrigadtório !"],
      newPasswordRule: [
        (v) =>
          (v && v.length >= 8) ||
          "A senha precisa ter no mínimo 8 caracteres !",
        (v) => v != this.request.oldPassword || "Senhas são iguais !",
      ],
      unlockBtn: false,
      type: "password",
      service: new UserService(),
    };
  },
  methods: {
    async validateForm() {
      return await this.$refs.form.validate();
    },
    changeTypeField() {
      this.type = this.type == "password" ? "text" : "password";
    },
    async initialState() {
      await this.$refs.form.resetValidation();
      await this.$refs.form.reset();
    },
    updatePassword() {
      this.isLoading = true;
      const id = this.$store.getters["userStore/userData"].id;
      let message,
        type = null;
      this.service
        .updatePassword(id, this.request)
        .then((res) => {
          message = res.data.message;
          if (res.data.success) {
            this.initialState();
            type = "success";
          } else {
            type = "info";
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
  watch: {
    request: {
      async handler() {
        this.unlockBtn = await this.validateForm();
      },
      deep: true,
    },
  },
};
</script>

<style>
</style>