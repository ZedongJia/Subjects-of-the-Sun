import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/index.css"
import install from '@/components/index.js'


var app = createApp(App).use(ElementPlus).use(router)
install(app)
app.mount('#app')