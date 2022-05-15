import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('./components/PopupApp.vue') },
  { path: '/devtools', component: () => import('./components/DevTools.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
