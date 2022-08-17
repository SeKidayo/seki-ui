/**
 * 侧边导航栏配置
 */
const menu = [
  {
    path: "menu1",
    component: () => import("@/views/menu1/Menu01.vue"),
    meta: {
      groupTitle: "入门",
      title: "测试",
    },
  },
];

export default menu;
