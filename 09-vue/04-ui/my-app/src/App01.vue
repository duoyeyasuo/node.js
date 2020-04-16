<template>
  <div id="app">
    <!--  <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
    </el-date-picker>-->

    <!-- <el-select v-model="value" placeholder="请选择性别">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select> -->

    <!-- <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
    </el-checkbox-group> -->

    <!-- <el-radio-group v-model="radio">
      <el-radio label="man">男</el-radio>
      <el-radio label="woman">女</el-radio>
    </el-radio-group> -->

    <!-- <el-input
      placeholder="请选择日期"
      suffix-icon="el-icon-date"
      v-model="input1">
    </el-input> -->

    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button> -->

    <!-- <el-row>
      <el-col :span="24"><div style="height:100px" class="grid-content bg-purple-dark"></div></el-col>
    </el-row> -->
    <!-- <el-row>
      <el-col :span="12"><div style="height:100px; background:pink;" class="grid-content bg-purple-dark"></div></el-col>
    </el-row> -->
     <!-- <el-row>
      <el-col :span="8"><div style="height:100px; background:pink;" class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="8"><div style="height:100px; background:gold;" class="grid-content bg-purple-dark"></div></el-col>
      <el-col :span="8"><div style="height:100px; background:pink;" class="grid-content bg-purple-dark"></div></el-col>
    </el-row> -->
    
    <!-- <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value: '',
      options: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }],
      checkList: ['复选框 A','复选框 B'],
      radio: "man",
      input1: '',
    };
  }
};
</script>

<style>
.bg-purple-dark{
  background-color: gold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
