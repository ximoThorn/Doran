import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Page
  },
  {
    path: '/icon',
    component: () => import('../views/Icon.vue')
  },
  {
    path: '/button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/collapse',
    component: () => import('../views/Collapse.vue')
  },
  {
    path: '/radio',
    component: () => import('../views/Radio.vue')
  },
  {
    path: '/checkbox',
    component: () => import('../views/Checkbox.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
