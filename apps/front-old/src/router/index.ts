import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultView
    }
  ]
})

export default router
