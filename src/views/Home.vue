<template>
  <div class="home-content">
    <header class="home-header">
      <div class="home-header-content">
        <div>logo+名称</div>
        <div>右侧nav</div>
      </div>
    </header>
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
    height: 55px;

    .home-header-content {
      background-color: antiquewhite;
      display: flex;
      justify-content: space-between;
      max-width: 1400px;
      margin: 0 auto;
    }
  }

  .home-container {
    background-color: aquamarine;
    padding-top: 55px;

    height: 2000px;
  }

  .home-footer {
    background-color: beige;
  }
}
</style>
