import { createRouter, createWebHashHistory } from 'vue-router'
import HomeViewVue from '../views/HomeView.vue'
import ContactsViewVue from '../views/ContactsView.vue'
import StatsViewVue from '../views/StatsView.vue'
import ContactDetailsViewVue from '../views/ContactDetailsView.vue'
import SingupViewVue from '../views/SingupView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/signup',
      name: 'singup',
      component: SingupViewVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactsViewVue
    },
    {
      path: '/contact/:id',
      name: 'contact-details',
      component: ContactDetailsViewVue
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsViewVue
    },
  ]
})

export default router