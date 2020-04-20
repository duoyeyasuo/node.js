<template>
  <div>
    <p>我是addcounter组件</p>
    <p>使用仓库中的数据：{{this.$store.state.count}}</p>
    <p>使用本组件内部的计算属性：{{count}}</p>
    <p>把仓库中的状态自动映射成本组件内的计算属性：{{count}}--{{num1}}--{{num2}}</p>
    <!-- <button @click="addone">加1</button> -->
    <button @click="add">加1</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex"
export default{
    methods: {
        ...mapMutations(["add"]),
        // addone(){ 
        //     this.$store.commit("add");
        // }
    },
    data(){
      return{
        xxx: this.$store.state.count
      }
    },
    computed:{
      ...mapState(["count","num1","num2"])
      /* count(){
        return this.$store.state.count
      } */
    }
}
</script>

<style>
</style>

/* 
  mapState()  
  mapState(["count","num1","num2"])   ["count","num1","num2"]是实参
  肯定是有一个返回值  它的返回值是一个对象  obj 
  ...obj   ... 叫拓展运算符  把对象进行拆分

  
 */