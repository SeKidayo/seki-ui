import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});

export default router;
