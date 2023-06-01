import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: ['fa', 'house'],
    component: () => import('../views/SearchPage.vue'),
    props: true,
    showInMenu: true,
  },
  {
    path: '/history',
    name: 'History',
    icon: ['fa', 'clock-rotate-left'],
    component: () => import('../views/HistoryPage.vue'),
    showInMenu: true,
  },
  {
    path: '/detail/:id',
    name: 'Details',
    component: () => import('../views/DetailPage.vue'),
    props: true,
    showInMenu: false,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
