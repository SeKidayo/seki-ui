<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route);
</script>

<template>
  <div>content</div>
  <div>{{ route.params }}</div>
</template>

<style></style>
