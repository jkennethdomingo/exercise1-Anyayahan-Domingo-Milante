import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kenneth from '../views/Kenneth.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/kenneth',
    name: 'kenneth',
    component: Kenneth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
