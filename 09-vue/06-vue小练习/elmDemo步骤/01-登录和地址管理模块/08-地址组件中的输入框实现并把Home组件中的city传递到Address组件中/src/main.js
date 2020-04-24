import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

// $router   $store    $axios
Vue.config.productionTip = false
Vue.prototype.$axios = axios  // 在Vue的原型对象上面挂载一个$axios属性
// 后面使用axios时，直接可以通过this.$axios就可以发出一个请求

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
