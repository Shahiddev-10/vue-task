import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ThankPage from '../views/ThankPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/thank-page',
    name: 'thankPage',
    component: ThankPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
