import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore 暂时忽略类型检查错误
import App from './App.vue'
import router from './router'
import Wujie from 'wujie-vue3'


const app = createApp(App)
app.use(Wujie)
app.use(createPinia())
app.use(router)

app.mount('#app')
