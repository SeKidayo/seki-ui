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
];

export default menu;
