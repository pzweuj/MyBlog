import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/BlogList.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('../pages/Archive.vue')
    },
    {
      path: '/practice',
      name: 'practice',
      component: () => import('../pages/Practice.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue')
    }
  ]
})

export default router
