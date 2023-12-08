import Vue from "vue";
import VueRouter from "vue-router";
import authMain from "@/views/auth/auth-main.vue";
import login from "@/views/auth/components/login-form.vue";
import register from "@/views/auth/components/register-form.vue";
import mainView from "@/views/main/mainView.vue";
import editUserDataMain from "@/views/main/edit-user-data/edit-user-data-main.vue";
import logOutMain from "@/views/main/log-out/log-out-main.vue";
import makeTransferMain from "@/views/main/make-transfer/make-transfer-main.vue";
import listTransferMain from "@/views/main/list-transfer/list-transfer-main.vue";
import updateBalanceMain from "@/views/main/update-balance/update-balance-main.vue";
import pageNotFound from "@/views/main/page-not-found/page-not-found-main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: "/auth",
    name: "auth",
    component: authMain,
    children: [
      {
        path: "login",
        name: "login",
        component: login,
      },
      {
        path: "register",
        name: "register",
        component: register,
      },
    ],
  },
  {
    path: "/main",
    name: "main",
    component: mainView,
    children: [
      {
        path: "editUser",
        name: "editUser",
        component: editUserDataMain,
      },
      {
        path: "logOut",
        name: "logOut",
        component: logOutMain,
      },
      {
        path: "makeTransfer",
        name: "makeTransfer",
        component: makeTransferMain,
      },
      {
        path: "listTransfer",
        name: "listTransfer",
        component: listTransferMain,
      },
      {
        path: "updateBalance",
        name: "updateBalance",
        component: updateBalanceMain,
      },
      {
        path: "*",
        name: "notFound",
        component: pageNotFound,
      },
    ],
  },
  {
    path: "*",
    name: "notFound",
    component: pageNotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
