import { createRouter, createWebHashHistory } from 'vue-router'
import Start from "@/views/Start/index.vue"
import Home from "./modules/home"
import Implement from "./modules/implement"
import Wu from "./modules/wu"
import Ren from "./modules/ren"
import Shen from "./modules/shen"

const routes = [
  {
    name: 'start',
    path: '',
    component: Start
  },
  Home,
  Implement,
  Wu,
  Ren,
  Shen
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
