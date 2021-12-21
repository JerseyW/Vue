<template>
  <div id="app">
    <School name="尚硅谷"  address="北京" :age="18"/>
    <hr>
    <student></student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
import {minxi} from "@/minxin";
import Vue from "vue";
import plugins from "@/plugins";//强大的功能
//Vue.mixin(minxi);//全局混合
Vue.use(plugins,1)
export default {
  name: 'App',
  components: {
    School,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
