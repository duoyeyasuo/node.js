<template>
  <el-card class="box-card">
    <div slot="header" class="header">
      <strong>简历填写</strong>
    </div>
    <el-steps :active="step+1" align-center>
      <el-step title="基本信息"></el-step>
      <el-step title="教育经历"></el-step>
      <el-step title="工作经验"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    {{form}}

    <el-form ref="form" v-if="step == 0" class="form" :model="form" label-width="100px">
      
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>

      <el-form-item label="姓别">
        <el-radio-group v-model="form.gender">
          <el-radio 
            v-for="(key,value) in metas.genders"
            :key="value"
            :label="value"
          >{{key}}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="熟悉的语言">
        <el-checkbox-group v-model="form.languages">
          <el-checkbox
           v-for="(txt,value) in metas.languages" 
           :key="value"
           :label="value">{{txt}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="年龄">
        <el-input-number v-model="form.age"  :min="18" :max="60"></el-input-number>
      </el-form-item>

      <el-form-item label="职位">
        <el-select v-model="form.job" placeholder="请选择">
          <el-option
            v-for="(val,key) in metas.jobs"
            :key="key"
            :label="val"
            :value="key">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否接受调岗">
        <el-switch
          v-model="form.accept" >
        </el-switch>
      </el-form-item>

      <el-form-item label="期望的薪资">
        <el-slider
          v-model="form.salary"
          range
          :step="1000"
          :min="5000"
          :max="30000">
        </el-slider>
      </el-form-item>

      <el-form-item label="预约时间">
        <el-time-select
          v-model="form.time"
          :picker-options="{
            start: '09:00',
            step: '01:00',
            end: '22:30'
          }"
          placeholder="选择时间">
        </el-time-select>
      </el-form-item>
    </el-form>


    <el-form ref="form" v-if="step == 1" class="form" :model="form" label-width="100px">
      <el-button @click="educations++; form.educations.push({})">添加一项</el-button>
      <el-collapse accordion>
        <el-collapse-item v-for="i in educations" :key="i">
          <el-form-item label="学历">
            <el-select v-model="form.educations[i-1].education">
              <el-option
                v-for="(val,key) in metas.educations"
                :key="key"
                :label="val"
                :value="key">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学校">
             <el-input v-model="form.educations[i-1].school"></el-input>
          </el-form-item>
          <el-button type="danger" @click="delete_education(i-1)">删除</el-button>
        </el-collapse-item>
    </el-collapse>

    </el-form>

    <el-form ref="form" v-if="step == 2" class="form" :model="form" label-width="100px">
      工作经验
    </el-form>

    <el-form ref="form" v-if="step == 3" class="form" :model="form" label-width="100px">
      完成
    </el-form>

    <el-row>
      <el-col :span="12">
        <el-button :disabled="step==0" type="info" @click="step--">
          <i class="el-icon-arrow-left"></i>
          返回
        </el-button>
      </el-col>
      <el-col :span="12" style="text-align:right">
        <el-button type="primary" v-if="step != 3" @click="step++">
          下一页
          <i class="el-icon-arrow-right"></i>
        </el-button>
        <el-button type="primary" v-if="step==3" @click="submit()">
          提交
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import * as metas from "./metas"
export default {
  data() {
    return {
      step:0, // 默认处于第1步
      metas,
      form: {
        name: '',
        gender:'',
        languages:[],
        age:18,
        job:"",
        accept:false,
        salary:0,
        time:'',
        educations:[{},{}]
      },
      educations:2
    };
  },
  methods:{
    submit(){
      // 通过axios 发送一个post请求   this.form   /api/jianli   post   存储到数据库 
      // 开发一个后台管理系统  也是一个项目  管理员  登录  今天都有哪些同学来面试了  
    },
    delete_education(index){
        this.$confirm('是否确定删除此教育经历?', '删除确认', {
          confirmButtonText: '删除',
          cancelButtonText: '保留',
          type: 'danger'
        }).then(() => {
          // 完成删除操作
          this.$delete(this.form.educations,index);
          this.educations--;
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>

<style lang="css" scoped>
.header{ text-align: center; }
.reg-card{ width: 800px; margin: 0 auto 0;}
.form{margin-top: 40px;}
</style>
