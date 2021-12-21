<template>
  <div class="demo">

    <h2>姓名：{{name | mySlice}}</h2>
    <h2>年龄：{{age}}</h2>
    <button ref="btn" @click="showName">点我提示姓名</button>
  </div>
</template>

<script>
 import {minxi} from "@/minxin"; //局部混合
export default {
  name: "Student",
  data(){
    return {
       name:"张三12134",
       age:15
    }
  },mixins:[minxi],
  mounted() {
    console.log("你好!!!")
  }
}
</script>

<style scoped>

</style>