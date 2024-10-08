import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TempView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ReactivityView.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/CrView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifecycleView.vue')
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: () => import('../views/WatchersView.vue')
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import('../views/RefsView.vue')
    },
    {
      path: '/comp_basic',
      name: 'comp_basic',
      component: () => import('../views/CbView.vue')
    },
  ]
})

export default router
