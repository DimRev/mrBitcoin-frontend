import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    }
  ]
})

export default router