import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    num1:1,
    num2:2,
    list:[
      {name:"wangcai",score:60},
      {name:"xiaoqiang",score:80},
      {name:"tom",score:50}
    ]
  },
  getters:{
    // 当成计算属性  找不及格的人数
    faileNumber(state){
      let n = 0; // 默认不及格的人数是0个
      state.list.forEach(item=>{
        if(item.score<60){
          n++;
        }
      })
      return n;
    }
  },
  mutations: {
    add(state){
      state.count++
    },
    sub(state){
      state.count--
    },
    addN(state,payload){
      console.log(payload)
      state.count += payload
    }
  },
  actions: {
  },
  modules: {
  }
})
