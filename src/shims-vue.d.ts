/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 解决报错: 无法找到模块“mockjs”的声明文件。尝试使用 `npm i --save-dev @types/mockjs` (如果存在)，或者添加一个包含 `declare module 'mockjs';` 的新声明(.d.ts)文件ts(7016)
declare module 'mockjs';