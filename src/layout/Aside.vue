<script setup lang="ts">
import { useRouter } from "vue-router";
import menu from "@/menu";

const router = useRouter();

// 提取menu信息
const menuList: MenuInfo[] = menu.map((item) => item.meta);
const menuMap: Record<string, any> = {};

menuList.forEach((item: MenuInfo) => {
  if (!menuMap[item.groupCode]) {
    menuMap[item.groupCode] = [];
  }
  menuMap[item.groupCode].push(item);
});

// 路由跳转
const menuClick = (item: any) => {
  router.push(`/home/${item.code}`);
};
</script>

<template>
  <div class="home-aside-content">
    <div
      v-for="(menuGroup, key) in menuMap"
      :key="key"
      class="home-aside-menu-group"
    >
      <h3>{{ menuGroup[0]?.groupTitle }}</h3>
      <ul>
        <li v-for="item in menuGroup" :key="item.code">
          <span class="home-aside-menu-text" @click="menuClick(item)">{{
            item.title
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-aside-content {
  padding: 10px 20px 0;

  .home-aside-menu-group {
    margin-bottom: 16px;

    ul > li {
      font-size: 14px;
      line-height: 24px;
      text-indent: 8px;
    }
    .home-aside-menu-text {
      cursor: pointer;

      &:hover {
        color: aqua;
        text-decoration: underline;
      }
    }
  }
}
</style>
