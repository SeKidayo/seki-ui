<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const btnClick = () => {
  router.push("/home");
};
</script>

<template>
  <h1>Welcome</h1>
  <button @click="btnClick">让我们开始吧!</button>
</template>

<style></style>
