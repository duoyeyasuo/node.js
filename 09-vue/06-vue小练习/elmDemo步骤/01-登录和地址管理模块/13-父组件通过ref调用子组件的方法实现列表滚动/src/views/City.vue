<template>
  <div class="city">
    <div class="search_wrap">
      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="city_val" placeholder="输入城市名" />
      </div>
      <button @click="$router.go(-1)">取消</button>
    </div>
    <div style="height:100%">
      <div class="location">
        <Location :address="city"></Location>
      </div>
      <Alphabet ref="allcity" :cityInfo="cityInfo" :keys="keys"></Alphabet>
    </div>
  </div>
</template>
<script>
import Location from "../components/Location";
import Alphabet from "../components/Alphabet";

export default {
  name: "City",
  data() {
    return {
      city_val: "",
      cityInfo: null, // 保存了所有的城市信息数据
      keys: [] // 保存字母A~Z
    };
  },
  created() {
    // 要发送ajax请求 通常在两个钩子发送  created  mounted
    this.getCityInfo();
  },
  methods: {
    getCityInfo() {
      // 获取所有的城市  this.$router  this.$store  this.$axios
      this.$axios("/api/posts/cities")
        .then(res => {
          console.log(res)
          this.cityInfo = res.data;
          this.keys = Object.keys(res.data);
          this.keys.pop(); // 把热门城市的那个key删除掉
          this.keys.sort(); // 进行排序
          // console.log(this.keys)

          // this.$refs.allcity  得到了Alphabet.vue这个组件实例   代理了data中的数据 和 methods中的方法
          // this.$refs.allcity.initScroll();
          this.$nextTick(()=>{
            this.$refs.allcity.initScroll();
          })
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    city_val() {
      console.log(this.city_val);
    }
  },
  computed: {
    city() {
      return (
        this.$store.getters.location.addressComponent.city ||
        this.$store.getters.location.addressComponent.province
      );
    }
  },
  components: {
    Location,
    Alphabet
  }
};
</script>
<style scoped>
.city {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.search_wrap {
  position: fixed;
  top: 0;
  height: 45px;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 3px 16px;
  display: flex;
  justify-content: space-between;
}
.search {
  background-color: #eee;
  border-radius: 10px;
  line-height: 40px;
  width: 85%;
  box-sizing: border-box;
  padding: 0 16px;
}
.search input {
  background: #eee;
  outline: none;
  border: none;
  margin-left: 5px;
}
.search_wrap button {
  outline: none;
  color: #009eef;
}

.location {
  background: #fff;
  padding: 8px 16px;
  height: 65px;
  box-sizing: border-box;
}

.search_list {
  background: #fff;
  padding: 5px 16px;
}
.search_list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>