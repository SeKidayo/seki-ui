<script lang="ts" setup>
import SekiHeader from "@/layout/Header.vue";
import SekiAside from "@/layout/Aside.vue";
// import SekiContent from "@/layout/Content.vue";
import SekiFooter from "@/layout/Footer.vue";
</script>

<template>
  <div class="home-content">
    <header class="home-header">
      <SekiHeader />
    </header>
    <aside class="home-aside">
      <SekiAside />
    </aside>
    <main class="home-main">
      <div class="home-main-content">
        <router-view></router-view>
      </div>
    </main>
    <footer class="home-footer">
      <SekiFooter />
    </footer>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  .home-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--header-bg-color);
  }

  .home-aside {
    position: fixed;
    left: 0;
    bottom: 0;
    top: var(--header-height);
    background-color: var(--aside-bg-color);
    width: var(--aside-width);
    overflow-y: auto;
  }

  .home-main {
    background-color: var(--main-bg-color);
    padding-top: var(--header-height);
    padding-left: var(--aside-width);
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    .home-main-content {
      padding: 10px 16px;
    }
  }

  .home-footer {
    background-color: var(--footer-bg-color);
    padding-left: var(--aside-width);
    height: var(--footer-height);
  }
}
</style>
