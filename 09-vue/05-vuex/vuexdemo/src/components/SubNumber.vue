<template>
  <div>
    <p>我是subcounter组件</p>
    <p>使用仓库中的数据：{{this.$store.state.count}}</p>
    <button @click="subone">减1</button>
  </div>
</template>

<script>
export default{
    methods: {
        subone(){ 
            this.$store.commit("sub");
        }
    }
}
</script>

<style>
</style>