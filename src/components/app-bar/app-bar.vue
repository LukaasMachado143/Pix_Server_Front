<template>
  <v-app-bar rounded color="blue">
    <v-menu transition="slide-x-transition" close-on-content-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-bind="attrs"
          v-on="on"
          class="mr-4"
          color="white"
        ></v-app-bar-nav-icon>
      </template>
      <router-list :list="pageList" />
    </v-menu>
    <v-toolbar-title>
      <span class="white--text"> Pix Server </span>
    </v-toolbar-title>
    <v-spacer />
    <Balance-account />
    <v-menu transition="slide-x-transition" close-on-content-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
          <v-img
            src="https://randomuser.me/api/portraits/women/85.jpg"
            style="width: 55px; height: 55px; border-radius: 50%"
          ></v-img>
        </v-btn>
      </template>
      <router-list :list="userList" />
    </v-menu>
  </v-app-bar>
</template>

<script>
import routerList from "./components/router-list.vue";
import BalanceAccount from "./components/balance-account.vue";
export default {
  components: { routerList, BalanceAccount },
  data() {
    return {
      pageList: [
        {
          title: "Lista de Transferências",
          icon: "mdi-view-list",
          to: "listTransfer",
        },
        {
          title: "Realizar Transferência",
          icon: "mdi-swap-horizontal",
          to: "makeTransfer",
        },
      ],
      userList: [
        {
          title: "Editar dados",
          icon: "mdi-account-cog",
          to: "editUser",
        },
        {
          title: "Sair",
          icon: "mdi-logout",
          to: "logOut",
        },
      ],
    };
  },
  computed: {
    balanceAccount() {
      return this.$store.getters["userStore/userData"].balance;
    },
  },
  methods: {
    oranizePageList() {
      if (this.balanceAccount && this.balanceAccount <= 100) {
        this.pageList.push({
          title: "Adicionar Saldo",
          icon: "mdi-wallet-plus",
          to: "updateBalance",
        });
      } else {
        this.pageList.filter((page) => page.to != "updateBalance");
      }
    },
  },
  mounted() {
    this.oranizePageList();
  },
};
</script>

<style></style>