import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式表
import '@/style/index.less'

createApp(App).use(store).use(router).mount('#app')
