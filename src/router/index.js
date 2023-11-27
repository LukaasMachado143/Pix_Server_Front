import Vue from "vue";
import VueRouter from "vue-router";
import authMain from "@/views/auth/auth-main.vue";
import login from "@/views/auth/components/login-form.vue";
import register from "@/views/auth/components/register-form.vue";
import mainView from "@/views/main/mainView.vue";
import editUserDataMain from "@/views/main/edit-user-data/edit-user-data-main.vue";
import logOutMain from "@/views/main/log-out/log-out-main.vue";

Vue.use(VueRouter);

const routes = [
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
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
