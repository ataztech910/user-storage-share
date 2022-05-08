import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: () => import('./components/Popup.vue') },
    { path: '/devtools', component: () => import('./components/DevTools.vue') },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })

export default router