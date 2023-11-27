<template>
  <v-card class="pa-4" max-height="400">
    <h3 class="mb-2">Selecione o destinatário</h3>
    <v-text-field outlined dense color="blue" label="Buscar" placeholder="Digite o nome do destinatário"
      append-icon="mdi-magnify" :disabled="hasSelectedUser" v-model="searchTerm" />
    <v-list height="265" style="overflow: auto;">
      <list-item v-for="user, index in filteredList" :key="index" :userData="user"
        @selectedUser="$emit('selectedUser', $event)" :hasSelectedUser="hasSelectedUser" />
    </v-list>
  </v-card>
</template>

<script>
import ListItem from './components/list-item.vue';

export default {
  props: ['userList', 'hasSelectedUser'],
  components: { ListItem },
  data() {
    return {
      filteredList: [],
      searchTerm: null
    }
  },
  methods: {
    filterUser() {
      this.filteredList = JSON.parse(JSON.stringify(this.userList))
      if (this.searchTerm != null || this.searchTerm != "")
        this.filteredList = this.filteredList.filter((user) => user.username.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
  },
  watch: {
    userList: {
      handler(value) {
        this.filteredList = JSON.parse(JSON.stringify(value))
        this.searchTerm = null
      }, immediate: true, deep: true
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
    }
  }
}
</script>

<style lang="scss"></style>