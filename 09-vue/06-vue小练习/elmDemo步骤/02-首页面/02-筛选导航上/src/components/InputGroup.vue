<template>
  <div id="text_group">
    <div class="input_group" :class="{'is-invalid':error}">
        <input 
            :type="type"
            :value="value"
            :placeholder="placehoder"
            @input="$emit('input',$event.target.value)"
        >
        <button v-if="btnTitle" :disabled="disabled" @click="$emit('btnClick')">{{btnTitle}}</button>
    </div> 
    <!-- 错误提醒 -->
    <div v-if="error" class="invalid-feedback">{{error}}</div>
  </div>
</template>

<script>
export default {
    name:"inputGroup",
    props:{
        type:{type:String, default:"text"},
        value:String,
        placehoder:String,
        btnTitle:String,
        disabled:Boolean,
        error:String
    },
    methods:{
      // f1(ev){
      //   this.$emit("input",ev.target.value)
      // }
    }
}
</script>

<style scoped>
.input_group {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
}
.input_group input {
  height: 100%;
  width: 60%;
  outline: none;
  border: 0;
}
.input_group button {
  border: none;
  outline: none;
  background: #fff;
}
.input_group button[disabled] {
  color: #aaa;
}
.is-invalid {
  border: 1px solid red;
}
.invalid-feedback {
  color: red;
  padding-top: 5px;
}
</style>

