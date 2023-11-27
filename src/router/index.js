import Vue from "vue";
import VueRouter from "vue-router";
import authMain from "@/views/auth/auth-main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "auth",
    component: authMain,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
