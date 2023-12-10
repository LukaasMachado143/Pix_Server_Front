<template>
  <v-list-item :disabled="hasSelectedUser">
    <v-list-item-avatar>
      <v-img :src="userData.imagePath" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ userData.name }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-icon>
      <v-icon
        :disabled="hasSelectedUser"
        color="blue"
        @click="hasSelectedUser ? null : $emit('selectedUser', userData)"
        >mdi-arrow-right-bold-box</v-icon
      >
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  props: ["userData", "hasSelectedUser"],
};
</script>

<style></style>