<template>
  <div class="address">
    <Header :isLeft="true" title="选择收货地址"></Header>
    <div class="city_search">
        <div class="search">
            <span class="city">
                {{city}}
                <i class="fa fa-angle-down"></i>
            </span>
            <i class="fa fa-search"></i>
            <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等">
        </div>
    </div>
    <Location :address="address"></Location>
  </div>
</template>

<script>
import Header from "../components/Header"
import Location from "../components/Location"

export default {
  name: 'Address',
  data(){
      return{
          city:"",
          search_val:""
      }
  },
  computed:{
    address(){
      return this.$store.getters.address
    }
  },
  components:{
      Header,
      Location
  },
  beforeRouteEnter(to,from,next){
    //   console.log(to.params.city)
    //   this.city = to.params.city
    next(vm=>{
        vm.city = to.params.city
    })
  }
}
</script>

<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}

.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}

.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 5px;
  background-color: #eee;
  outline: none;
  border: none;
}

.area {
  margin-top: 16px;
  background: #fff;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>
