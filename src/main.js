import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'amfe-flexible'

// 引入自己的公共样式
import '@/styles/base.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
