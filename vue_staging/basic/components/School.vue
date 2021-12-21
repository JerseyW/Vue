
<template>
	<div class="demo">
    <h1>{{msg}}</h1>
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<h2>年龄：{{age +1}}</h2>
		<button ref="btn" @click="showName">点我提示姓名</button>
	</div>
</template>

<script>

 import {minxi} from "@/minxin";

 export default {
		name:'School',
    //props: ['name','address', 'age' ],//简单接受
    //限制接收
 /*   props: {
       name:String,
       age:Number,
       address:String
    },*/
     props: {//props 有优先于data挂载到vc上
       name: {
         type:String,
         required:true
       },
       age: {
         type:Number,
         default:18
       },
       address:String
     },
		data(){
			return {
        msg:"Welcome to Your Vue.js App"
			}
		},
    mixins:[minxi]
	}
</script>
//scoped 局部作用域，APP 组件不适合使用
<style scoped lang="css">
	.demo{
		background-color: orange;
	}
</style>
