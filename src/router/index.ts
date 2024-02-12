import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
import ContactsViewVue from '../views/ContactsView.vue'
import StatsViewVue from '../views/StatsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactsViewVue
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsViewVue
    },
  ]
})

export default router