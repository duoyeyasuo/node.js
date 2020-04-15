<template>
    <div>
        <h1>Test组件</h1>
        <p>{{msg}}</p>
        <ul>
            <li v-for="(item,index) in news" :key="index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"wangcai",
            news:["new1","new2","new3"]
        }
    }
}
</script>
<style scoped lang="less">
    @color:pink;
    h1{
        color: @color;
    }
</style>