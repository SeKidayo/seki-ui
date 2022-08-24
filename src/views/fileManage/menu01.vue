<script setup lang="ts">
import { ref } from "vue";
// 案例一逻辑 --- 开始
const uploadImgRef = ref<string>("");

const showPreview = (e: Event) => {
  const files: FileList | null = (e.target as HTMLInputElement).files;
  if (!files || files.length === 0) return;

  const file: File = files[0];
  const { type } = file;

  if (!/^image\/\w+/.test(type)) {
    alert("我想你一定是不小心点错了文件对吧!上传一张图片试试吧!");
    return;
  }

  // 创建预览图方法有二

  // 1) URL.createObjectURL(blob) 在内存中创建一个URL用于指向传入的Blob对象("链接形式")
  // URL.revokeObjectURL(uploadImgRef.value); // 释放存储于内存中上一次的URL
  // uploadImgRef.value = URL.createObjectURL(file);

  // 2) fr.readAsDataURL(blob) 在内存中创建包含很多字符的base64格式 字符串,其本质是将blob对象的值解析为data:base64格式然后"嵌入"到文档中
  //    且是异步行为
  if (window.FileReader) {
    const fr: FileReader = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function () {
      uploadImgRef.value = this.result as string;
    };
  }
};
// 案例一逻辑 --- 结束
</script>

<template>
  <h2>案例一:图片预览</h2>
  <div>
    <input type="file" @change="showPreview" />
  </div>
  <div>
    <img :src="uploadImgRef" width="800" />
  </div>
</template>

<style></style>
