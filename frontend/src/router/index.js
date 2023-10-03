import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kenneth from '../views/Kenneth.vue'
import JD from '../views/JD.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kenneth-domingo',
    name: 'kenneth',
    component: Kenneth
  },
  {
    path: '/JD-Anyayahan',
    name: 'JD',
    component: JD
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
