<template>
  <div class="home-content">
    <header class="home-header">
      <div class="home-header-content">
        <div>logo+名称</div>
        <div>右侧nav</div>
      </div>
    </header>
    <aside class="home-aside">
      <div class="home-aside-content">侧边栏</div>
    </aside>
    <main class="home-container">
      <section>1</section>
      <section>2</section>
      <section>3</section>
    </main>
    <footer class="home-footer">footer</footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<style lang="less" scoped>
.home-content {
  .home-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: aqua;
    height: var(--header-height);

    .home-header-content {
      background-color: antiquewhite;
      display: flex;
      justify-content: space-between;
      max-width: var(--header-content-max-width);
      margin: 0 auto;
    }
  }

  .home-aside {
    position: fixed;
    left: 0;
    bottom: 0;
    top: var(--header-height);
    background-color: rosybrown;
    width: var(--aside-width);
    overflow-y: auto;

    .home-aside-content {
      height: 2000px;
    }
  }

  .home-container {
    background-color: aquamarine;
    padding-top: var(--header-height);
    padding-left: var(--aside-width);
    height: 2000px;
  }

  .home-footer {
    background-color: beige;
    padding-left: var(--aside-width);
  }
}
</style>
