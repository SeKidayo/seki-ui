<script setup lang="ts">
import Mock from "mockjs";
import * as echarts from "echarts";
import { onMounted } from "vue";

onMounted(() => {
  // 需要获取到真实DOM,故需要在挂载完毕生命周期内进行 初始化echarts实例 操作
  const echartsDom = document.getElementById(
    "echarts-container"
  ) as HTMLElement;
  const myChart = echarts.init(echartsDom);

  // 绘制图标
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
});
const data = Mock.mock({
  "list|1-10": [
    {
      "id|+1": 1,
    },
  ],
});

console.log(data);
</script>

<template>
  <div id="echarts-container" style="width: 600px; height: 400px" />
</template>

<style></style>
