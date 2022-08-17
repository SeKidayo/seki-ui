import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Welcome from "@/views/Welcome.vue";

import menu from "@/menu";

const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [
    {
      path: "/",
      redirect: "/welcome",
      children: [
        {
          path: "welcome",
          component: Welcome,
        },
        {
          path: "home",
          component: Home,
          children: menu, // 侧边栏导航信息
        },
      ],
    },
  ],
});

export default router;
