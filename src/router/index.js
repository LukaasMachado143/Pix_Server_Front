import Vue from "vue";
import VueRouter from "vue-router";
import authMain from "@/views/auth/auth-main.vue";
import login from "@/views/auth/components/login-form.vue";
import register from "@/views/auth/components/register-form.vue";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
