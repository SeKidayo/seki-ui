<script setup lang="ts">
import { ref } from "vue";

const uploadImgRef = ref<string>("");

const inputChange = (e: Event) => {
  console.log(e);
  const files: FileList | null = (e.target as HTMLInputElement).files;
  if (!files) return;
  // todo
};
</script>

<template>
  <h1>FileReader</h1>
  <h2>图片预览</h2>
  <div>
    <input type="file" @change="inputChange" />
  </div>
  <div>
    <img :src="uploadImgRef" />
  </div>
</template>

<style></style>
