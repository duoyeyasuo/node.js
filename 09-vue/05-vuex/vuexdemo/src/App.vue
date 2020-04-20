<template>
  <!-- <Test></Test> -->
  <div>
    <!-- <p>{{this.$store.state.num}}</p> -->
    <p>state==>{{num}}</p>
    <!-- <p>getters==>{{this.$store.getters.mynum}}</p> -->
    <p>getters==>{{mynum}}</p>
    <button @click="add">加1</button>
    <!-- <button @click="addASync">异步加1</button> -->
    <!-- <button @click="f1">异步加1</button> -->
    <button @click="addASync">异步加1</button>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import { mapState,mapMutations, mapGetters, mapActions } from "vuex"
export default {
  name: 'App',
  computed:{
    ...mapState(["num"]),
    ...mapGetters(["mynum"])
  },
  methods:{
    // ...mapMutations(["add","addASync"])
    ...mapMutations(["add"]),
    ...mapActions(["addASync"])
    /* f1(){
      this.$store.dispatch("addASync")
    } */
    // add(){
    //   this.$store.commit("add")
    // }
  },
  components: {
    Test
  }
}
</script>