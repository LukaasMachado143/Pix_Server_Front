<template>
  <v-card class="pa-4" heigth="100%" :disabled="hasSelectedUser">
    <h3 class="mb-2">Selecione o destinatário</h3>
    <v-text-field
      outlined
      dense
      color="blue"
      label="Buscar"
      placeholder="Digite o nome do destinatário"
      append-icon="mdi-magnify"
      :disabled="hasSelectedUser || isLoading"
      v-model="searchTerm"
      hide-details
      class="mb-1"
    />
    <v-row justify="center" class="mt-4" v-if="isLoading">
      <v-progress-circular indeterminate color="red" size="100" />
    </v-row>
    <v-list
      v-else-if="!isLoading && filteredList.length > 0"
      height="330"
      style="overflow: auto"
    >
      <list-item
        v-for="(user, index) in filteredList"
        :key="index"
        :userData="user"
        @selectedUser="$emit('selectedUser', $event)"
        :hasSelectedUser="hasSelectedUser"
      />
    </v-list>
  </v-card>
</template>

<script>
import UserService from "@/services/user-service";
import ListItem from "./components/list-item.vue";
export default {
  props: ["hasSelectedUser"],
  components: { ListItem },
  data() {
    return {
      filteredList: [],
      searchTerm: null,
      userList: [],
      isLoading: false,
      service: new UserService(),
    };
  },
  methods: {
    filterUser() {
      this.filteredList = JSON.parse(JSON.stringify(this.userList));
      if (this.searchTerm != null || this.searchTerm != "") {
        const term = this.searchTerm.toString().toLowerCase();
        this.filteredList = this.filteredList.filter((user) =>
          user.name.toString().toLowerCase().includes(term)
        );
      }
    },
    getAllUsers() {
      this.isLoading = true;
      const id = this.$store.getters["userStore/id"];
      this.service
        .getAllUsers(id)
        .then((res) => {
          this.userList = res.data.data.map((user, index) => {
            return {
              ...user,
              imagePath: `https://randomuser.me/api/portraits/women/${
                index + 1
              }.jpg`,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  watch: {
    userList: {
      handler(value) {
        this.filteredList = JSON.parse(JSON.stringify(value));
        this.searchTerm = null;
      },
      immediate: true,
      deep: true,
    },
    searchTerm: {
      timeoutId: null,
      handler(value) {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.filterUser(value);
          this.timeoutId = null;
        }, 500);
      },
    },
  },
  mounted() {
    this.getAllUsers();
  },
};
</script>

<style lang="scss"></style>