import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/style/index.less";

const app = createApp(App);

// 引入路由
app.use(router);

// 挂载
app.mount("#app");
