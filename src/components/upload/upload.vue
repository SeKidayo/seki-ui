<script setup lang="ts">
/**
 * 上传组件
 */
import { shallowRef } from "vue";
import SekiButton from "@/components/button";

const inputRef = shallowRef<HTMLInputElement>();

const handleClick = () => {
  inputRef.value!.click();
};
</script>

<template>
  <div class="seki-upload" @click="handleClick">
    <slot>
      <SekiButton>上传文件</SekiButton>
    </slot>
    <input type="file" class="seki-upload-input" ref="inputRef" />
  </div>
</template>

<style lang="less" scoped>
.seki-upload {
  display: inline-flex;
}

.seki-upload-input {
  // 浏览器默认的上传文件组件公认极丑,故通用做法均为隐藏该控件,通过触发input:file的click()方法来模拟点击
  display: none;
}
</style>
