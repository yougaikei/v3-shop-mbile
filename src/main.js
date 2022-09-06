import { createApp } from 'vue'
import App from './App.vue'

// 引入 VueRouter 组件
import router from './router'

// 引入 vant 组件
import Vant from 'vant'
// 引入 vant 样式
import 'vant/lib/index.css'

// 引入适配样式
import 'amfe-flexible'

// 引入自己的公共样式
import '@/styles/base.css'


const app = createApp(App);
// 引入 Router
app.use(router);
// 引入 vant
app.use(Vant);
// 挂载 app
app.mount('#app');
