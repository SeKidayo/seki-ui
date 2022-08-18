<script setup lang="ts">
import { useRouter } from "vue-router";
import menu from "@/menu";

const router = useRouter();

// 路由跳转
const menuClick = (item: any) => {
  router.push(`/home/${item.path}`);
};
</script>

<template>
  <div class="home-aside-content">
    <ul>
      <li v-for="item in menu" :key="item.path">
        <span class="home-aside-menu-text" @click="menuClick(item)">{{
          item.meta.title
        }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.home-aside-content {
  padding: 10px 20px 0;
  .home-aside-menu-text {
    cursor: pointer;
    &:hover {
      color: aqua;
      text-decoration: underline;
    }
  }
}
</style>
