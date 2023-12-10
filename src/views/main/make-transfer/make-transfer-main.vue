<template>
  <v-row no-gutters justify="center">
    <v-col cols="12" sm="6" class="pr-2">
      <select-addressee-main
        @selectedUser="selectedUser = $event"
        :hasSelectedUser="selectedUser != null ? true : false"
      />
    </v-col>
    <v-col cols="12" sm="6" class="pl-2">
      <set-data-transfer
        :selectedUser="selectedUser"
        @resetSelectedUser="selectedUser = null"
      />
    </v-col>
  </v-row>
</template>

<script>
import selectAddresseeMain from "./components/select-addressee/select-addressee-main.vue";
import SetDataTransfer from "./components/set-data-transfer/set-data-transfer.vue";
export default {
  components: { selectAddresseeMain, SetDataTransfer },
  data() {
    return {
      selectedUser: null,
    };
  },
};
</script>

<style></style>