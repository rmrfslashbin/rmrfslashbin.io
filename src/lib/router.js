import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    // Lazy-load the page
    component: () => import(/* webpackChunkName: "root" */ '../views/Root.vue')
  },
  {
    path: '/learn',
    name: 'learn',
    // Lazy-load the page
    component: () => import(/* webpackChunkName: "root" */ '../views/Learn.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
