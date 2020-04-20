import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from "./getters"
export default new Vuex.Store({
  state: {
    num:0
  },
  getters,
  mutations: {
    add(state){
      state.num++
    },
    // addASync(state){
    //   setTimeout(function(){
    //     state.num++
    //   },3000)
    // }
  },
  actions: {
    addASync(context){
      setTimeout(function(){
        context.commit("add")
      },3000)
    }
  },
})
// vue.js  指令   组件  计算属性  过滤器  生命周期
// vue-router  路由   .... 
// vuex 管理项目中的状态（数据）  state  getters  mutations  actions  
// vuecli 开发项目脚手架  单文件组件   .vue  
// webpack 等vue基础讲完，说webpack  
// ES6  系统说过   遇到一个ES写法   说一个  
// axios 请求api接口  跨域问题  jsonp  cors  proxy  nigix  浏览器插件 xxx xxx 
// UI库 PC端 ElementUI  移动端mainUI cubeUI vantUI... 



