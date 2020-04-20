<template>
  <div>
    <p>Test组件</p>
    <!-- <p>不及格的人数是：{{this.$store.getters.faileNumber}}</p> -->
    <!-- <p>不及格的人数是：{{failedNumber}}</p> -->
    <p>不及格的人数是：{{faileNumber}}</p>
    <button @click="add100">加100</button>
    <hr>
    <add-number></add-number>
    <hr>
    <sub-number></sub-number>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import AddNumber from "@/components/AddNumber"
import SubNumber from "@/components/SubNumber"
export default{
   methods:{
     add100(){
       this.$store.commit("addN",{num1:100,num2:200})
     }
   },
   computed:{
     ...mapGetters(["faileNumber"])
     /* failedNumber(){
       return this.$store.getters.faileNumber
     } */
   },
   components: {
       AddNumber,
       SubNumber
   }
}
</script>

<style>
</style>