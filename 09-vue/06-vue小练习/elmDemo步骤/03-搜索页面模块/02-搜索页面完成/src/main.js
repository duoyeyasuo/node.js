import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { Indicator } from 'mint-ui';

// $router   $store    $axios
Vue.config.productionTip = false
Vue.prototype.$axios = axios  // 在Vue的原型对象上面挂载一个$axios属性
// 后面使用axios时，直接可以通过this.$axios就可以发出一个请求

// 请求拦截  开启loading效果
axios.interceptors.request.use(config=>{
  Indicator.open();
  return config
}, error => {
  return Promise.reject(error);
})

// 响应拦截  关闭loading效果
axios.interceptors.response.use(response=>{
  Indicator.close();
  return response
}, error => {
  Indicator.close();
  return Promise.reject(error);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
