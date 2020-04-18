import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

// 全局前置守卫
router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === '/login') {
    next()
  } else {
    next({
      path: '/login'
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
