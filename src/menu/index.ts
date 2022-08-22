/**
 * 侧边导航栏配置
 */
const menu = [
  {
    path: "menu1",
    component: () => import("@/views/fileManage/menu01.vue"),
    meta: {
      groupCode: "fileManage",
      groupTitle: "文件处理",
      title: "FileReader案例",
      code: "menu1",
    },
  },
  {
    path: "fileRead",
    component: () => import("@/views/fileManage/fileRead.vue"),
    meta: {
      groupCode: "fileManage",
      groupTitle: "文件处理",
      title: "各类文件处理",
      code: "fileRead",
    },
  },
  {
    path: "firstDraft",
    component: () => import("@/views/visualization/firstDraft.vue"),
    meta: {
      groupCode: "visualization",
      groupTitle: "可视化",
      title: "可视化初稿",
      code: "firstDraft",
    },
  },
];

export default menu;
