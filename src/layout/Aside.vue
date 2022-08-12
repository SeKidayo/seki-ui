<script setup lang="ts">
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

const originMenuData = [];
for (let i = 0; i < 10; i++) {
  originMenuData.push({
    code: `menuID${i}`,
    name: `label${i}`,
  });
}

const router = useRouter();
const route = useRoute();

// console.log("router", router);
// console.log("route", route);

const asideMenuData =
  reactive<{ code: string; name: string }[]>(originMenuData);

// 路由跳转
const menuClick = (item: { code: string; name: string }) => {
  console.log(item);
  router.push(`/content/${item.code}`);
};
</script>

<template>
  <div class="home-aside-content">
    <div>Aside</div>
    <ul>
      <li v-for="(item, index) in asideMenuData" :key="index">
        <span @click="menuClick(item)">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.home-aside-content {
  padding: 10px 20px 0;
}
</style>
