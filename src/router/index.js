import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/cartoon',
    name: 'Cartoon',
    component: () =>
      import(/* webpackChunkName: "cartoon" */ '../views/Cartoon.vue')
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: () =>
      import(/* webpackChunkName: "userCenter" */ '../views/UserCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
