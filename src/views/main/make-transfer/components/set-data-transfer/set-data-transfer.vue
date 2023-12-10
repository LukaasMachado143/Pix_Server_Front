<template>
  <v-card class="pa-4" height="100%" :disabled="!selectedUser">
    <h3 class="mb-4">Dados da Transferência</h3>
    <h3>De:</h3>
    <user-data :data="conectedUser" />
    <h3 class="mt-2">Para:</h3>
    <user-data :data="selectedUser" class="mb-4" />
    <v-row no-gutters align="center">
      <span class="font-weight-bold mr-2">Valor da Transferência:</span>
      <v-text-field
        outlined
        dense
        hide-details="auto"
        prefix="R$"
        :suffix="trasnferValue ? '' : ',00'"
        v-model="trasnferValue"
        type="number"
        min="0"
      />
    </v-row>
    <v-row no-gutters justify="end" class="mt-4">
      <v-btn
        color="blue"
        class="mr-4"
        outlined
        @click="$emit('resetSelectedUser')"
      >
        <span>cancelar</span>
      </v-btn>
      <v-btn color="green" :disabled="!trasnferValue">
        <span class="white--text">transferir</span>
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import userData from "./user-data.vue";
export default {
  components: { userData },
  props: ["selectedUser"],
  data() {
    return {
      conectedUser: null,
      trasnferValue: null,
    };
  },
  methods: {
    setConectedUser() {
      const userData = this.$store.getters["userStore/userData"];
      return {
        id: userData.id,
        imagePath: "https://randomuser.me/api/portraits/women/85.jpg",
        name: userData.name,
        phone: userData.phone,
        pixKey: userData.pixKey,
      };
    },
  },
  watch: {
    selectedUser: {
      handler(value) {
        if (value) this.conectedUser = this.setConectedUser();
        else this.conectedUser = null;
      },
    },
    trasnferValue: {
      handler(value) {
        if (value < 0) this.trasnferValue = null;
      },
    },
  },
};
</script>
