import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Content from "@/layout/Content.vue";

const router = createRouter({
  history: createWebHashHistory(), // hash模式
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "content/:pageId",
          component: Content,
        },
      ],
    },
  ],
});

export default router;
