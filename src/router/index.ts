import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/favor',
    name: 'favor',
    component: () => import('@/views/favor/favor.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order/order.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/message.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city/city.vue')
  },
  {
    path: '/detail/:houseId',
    name: 'detail',
    component: () => import('@/views/detail/detail.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
