/**
 * 侧边导航栏配置
 */
const menu = [
  {
    path: "menu1",
    component: () => import("@/views/FileRead/FileReadDemo01.vue"),
    meta: {
      groupTitle: "文件处理",
      title: "FileReader案例",
    },
  },
  {
    path: "visualization",
    component: () => import("@/views/Visualization/Index.vue"),
    meta: {
      groupCode: "visualization",
      groupTitle: "可视化",
      title: "可视化初稿",
      code: "firstDraft",
    },
  },
];

export default menu;
