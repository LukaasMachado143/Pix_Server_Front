<template>
  <v-app-bar rounded color="blue">
    <v-menu transition="slide-x-transition" close-on-content-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="mr-4" color="white"></v-app-bar-nav-icon>
      </template>
      <router-list :list="pageList" />
    </v-menu>
    <v-toolbar-title>
      <span class="white--text">
        Pix Server
      </span>
    </v-toolbar-title>
    <v-spacer />
    <v-row no-gutters justify="end" align="center" class="mr-4">
      <v-icon color="white" class="mr-1">
        mdi-wallet
      </v-icon>
      <span class="white--text">R$ 250,00</span>
    </v-row>
    <v-menu transition="slide-x-transition" close-on-content-click offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="mr-2" v-bind="attrs" v-on="on">
          <v-img src="https://randomuser.me/api/portraits/women/85.jpg"
            style="width: 55px; height: 55px; border-radius: 50%;"></v-img>
        </v-btn>
      </template>
      <router-list :list="userList" />
    </v-menu>
  </v-app-bar>
</template>

<script>
import routerList from "./components/router-list.vue"

export default {
  components: { routerList },
  data() {
    return {
      pageList: [
        {
          title: "Realizar Transferência",
          icon: "mdi-swap-horizontal",
          to: "makeTransfer"
        },
        {
          title: "Verificar Transferência",
          icon: "mdi-view-list",
          to: ""
        },
        {
          title: "Adicionar Saldo",
          icon: "mdi-wallet-plus",
          to: ""
        },
        {
          title: "Sobre",
          icon: "mdi-information",
          to: ""
        },
      ],
      userList: [
        {
          title: "Editar dados",
          icon: "mdi-account-cog",
          to: "editUser"
        },
        {
          title: "Sair",
          icon: "mdi-account-arrow-left",
          to: "logOut"
        },
      ]
    }
  }

}
</script>

<style></style>