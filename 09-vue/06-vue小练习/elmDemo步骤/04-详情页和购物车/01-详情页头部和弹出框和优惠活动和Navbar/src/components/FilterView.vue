<template>
  <!-- self 自己查一下  事件修饰符 -->
  <div :class="{'open':isSort || isScreen}" @click.self="hideView" v-if="filterData">
    <!-- 筛选导航 -->
    <div v-if="filterData" class="filter_wrap">
      <div class="filter">
        <div
          class="filter-nav"
          v-for="(item,index) in filterData.navTab"
          :key="index"
          :class="{'filter-bold':currentFilter==index}"
          @click="filterSort(index)"
        >
          <span>{{item.name}}</span>
          <i v-if="item.icon" :class="'fa fa-'+item.icon"></i>
        </div>
      </div>
    </div>
    <!-- 排序 -->
    <section class="filter-extend" v-if="isSort">
        <ul>
            <li 
            v-for="(item,index) in filterData.sortBy" 
            :key="index"
            @click="selectSort(item, index)"
            >
                <span :class="{'selectName':currentSort == index}">{{item.name}}</span>
                <i v-show="currentSort == index" class="fa fa-check"></i>
            </li>
        </ul>
    </section>
    <!-- 最后一个筛选按钮所对应的面板 -->
    <section class="filter-extend" v-if="isScreen">
      <div class="filter-sort">
        <div 
        v-for="(screen,index) in filterData.screenBy" 
        :key="index" class="morefilter">
          <p class="title">{{screen.title}}</p>
          <ul>
            <li 
            v-for="(item,idx) in screen.data" 
            :key="idx"
            :class="{'selected':item.select}"
            @click="selectScreen(item,screen)"
            >
              <img v-if="item.icon" :src="item.icon" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="morefilter-btn">
        <span @click="clearFilter" :class="{'edit':edit}" class="morefilter-clear">清空</span>
        <span @click="filterOk" class="morefilter-ok">确定</span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "FilterView",
  data() {
    return {
      currentFilter: 0,
      isSort: false,
      currentSort:0,
      isScreen:false
    };
  },
  computed:{
    edit(){
      let edit = false;
      this.filterData.screenBy.forEach(screen=>{
        screen.data.forEach(item=>{
          if(item.select){
            edit = true;
          }
        })
      })
      return edit;
    }
  },
  methods: {
    filterSort(index) {
      this.currentFilter = index;
      switch (index) {
        case 0:
          this.isSort = true;
          this.$emit("searchFixed",true)
          break;
        case 1:
          this.$emit("update",{condition:this.filterData.navTab[1].condition})
          this.hideView();
          break;
        case 2:
          this.$emit("update",{condition:this.filterData.navTab[2].condition})
          this.hideView();
          break;
        case 3:
          console.log(333333333333333)
          this.isScreen = true;
          this.isSort = false;
          this.$emit("searchFixed",true)
          break;
        default:
          this.hideView();
          break;
      }
    },
    hideView(){
        this.isSort = false;  // 当遮罩层隐藏掉
        this.isScreen = false; 
        this.$emit("searchFixed",false); // 当点击了遮罩层后，取消搜索框上面的定位定位的类
    },
    selectSort(item, index){
        this.currentSort = index;
        this.filterData.navTab[0].name = item.name
        this.hideView();

        // console.log(item.code)
        this.$emit("update",{condition:item.code})
    },
    selectScreen(item,screen){
      if(screen.id !== "MPI"){
        // 单选
        screen.data.forEach(item=>{
          item.select = false;
        })
        item.select = !item.select;
      }else{
        // 多选
        item.select = !item.select;
      }
    },
    clearFilter(){
      this.filterData.screenBy.forEach(screen=>{
        screen.data.forEach(item=>{
          item.select = false;
        })
      })
    },
    filterOk(){
       let screenData = {
         MPI:"",
         offer:"",
         per:""
       }
       let mpiStr = "";
       this.filterData.screenBy.forEach(screen=>{
        screen.data.forEach(item=>{
          if(item.select){
            // 你选择了这个item
            if(screen.id !== "MPI"){  // 单选
              screenData[screen.id] = item.code
            }else{ // 多选
              mpiStr += item.code + ",";  // 条件和条件之间使用逗号隔开
              screenData[screen.id] = mpiStr
            }
          }
        })
      })
      this.$emit("update",{condition:screenData})
      this.hideView();
    }
  },
  props: {
    filterData: Object
  }
};
</script>

<style scoped>
.filter_wrap {
  background: #fff;
  /* fixed相对于视口定位，不管视口如何滚动，它的位置始终不变，而sticky则是在目标区域内随着页面的滚动而滚动，超出这个区域后就跟fixed一样不管视口如何滚动位置始终不变。 */
  position: sticky;
  top: 54px;
  z-index: 10;
}
.filter {
  position: relative;
  border-bottom: 1px solid #ddd;
  line-height: 10.4vw;
  z-index: 101;
  height: 10.666667vw;
  display: flex;
  justify-content: space-around;
}
.filter-nav {
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 0.8333rem;
}
.filter-nav i {
  width: 1.6vw;
  height: 0.8vw;
  margin-left: 1.333333vw;
  margin-bottom: 0.533333vw;
  fill: #333;
  will-change: transform;
}

.filter-bold {
  font-weight: 600;
  color: #333;
}

.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  z-index: 3;
}

.filter-extend {
  background-color: #fff;
  color: #333;
  padding-top: 2.133333vw;
  position: absolute;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 24.533333vw;
}
.filter-extend li {
  position: relative;
  padding-left: 5.333333vw;
  line-height: 10.666667vw;
  overflow: hidden;
}
.fa-check {
  float: right;
  color: #009eef;
  margin-right: 3.733333vw;
  line-height: 10.666667vw;
}

.selectName {
  color: #009eef;
}
/* 筛选 */
.filter-sort {
  background: #fff;
  padding: 0 2.666667vw;
  line-height: normal;
}
.morefilter {
  margin: 2.666667vw 0;
  overflow: hidden;
}
.morefilter .title {
  margin-bottom: 2vw;
  color: #666;
  font-size: 0.5rem;
}
.morefilter ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.8rem;
}
.morefilter li {
  box-sizing: border-box;
  width: 30%;
  height: 9.333333vw;
  line-height: 9.333333vw;
  margin: 0.8vw 1%;
  background: #fafafa;
}
.morefilter li img {
  width: 3.466667vw;
  height: 3.466667vw;
  vertical-align: middle;
  margin-right: 0.8vw;
}
.morefilter li span {
  margin-left: 2%;
  vertical-align: middle;
}

.morefilter-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
  line-height: 11.466667vw;
  box-sizing: border-box;
}
.morefilter-btn span {
  font-size: 0.826667rem;
  text-align: center;
  text-decoration: none;
  flex: 1;
}
.morefilter-clear {
  color: #ddd;
  background: #fff;
}
.morefilter-ok {
  color: #fff;
  background: #00d762;
  border: 0.133333vw solid #00d762;
}

.selected {
  color: #3190e8 !important;
  background-color: #edf5ff !important;
}

.edit {
  color: #333 !important;
}
</style>