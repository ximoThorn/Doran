import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'

Vue.use(VueRouter);

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
  },
  {
    path: '/switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/badge',
    component: () => import('../views/Badge.vue')
  },
  {
    path: '/avatar',
    component: () => import('../views/Avatar.vue')
  },
  {
    path: '/grid',
    component: () => import('../views/Grid.vue')
  },
  {
    path: '/breadcrumb',
    component: () => import('../views/Breadcrumb.vue')
  },
  {
    path: '/tag',
    component: () => import('../views/Tag.vue')
  },
  {
    path: '/progress',
    component: () => import('../views/Progress.vue')
  },
  {
    path: '/rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/divider',
    component: () => import('../views/Divider.vue')
  },
  {
    path: '/input-number',
    component: () => import('../views/Input-number.vue')
  },
  {
    path: '/input',
    component: () => import('../views/Input.vue')
  },
  {
    path: '/select',
    component: () => import('../views/Select.vue')
  },
  {
    path: '/pagination',
    component: () => import('../views/Pagination.vue')
  },
  {
    path: '/dropdown',
    component: () => import('../views/Dropdown.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
