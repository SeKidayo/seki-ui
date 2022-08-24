<script setup lang="ts">
/**
 * 按钮组件
 */
</script>

<template>
  <button class="seki-button">
    <slot></slot>
  </button>
</template>

<style lang="less" scoped>
.seki-button {
  height: 32px;
  padding: 8px 15px;
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: bisque;
    border-color: azure;
  }
  &:active {
    border: 1px solid #baccd9;
  }
}
</style>
