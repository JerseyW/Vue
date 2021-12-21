<template>
	<h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import {reactive, toRef, toRefs, shallowReactive, shallowRef, readonly, shallowReadonly} from 'vue'
	export default {
		name: 'Demo',
    setup: function () {
      //数据:响应式的前提：数据类型需要经过ref或者reactive包裹的类型变成实现对象
      //ref包裹的每次都会生成新的实现对象，toRef 是对原对象进行响应式更改，其value值指向原对象的某个属性。主要是要将响应对象的某个属性单独提供给外部使用
      //shallowReactive 浅层次的响应式，只考虑第一层
      //shallowRef 不会处理对象形式的响应式
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

     // person = readonly(person)//让一个响应式数据变为只读的（深只读）
      //person = shallowReadonly(person)//让一个响应式数据变为只读的（浅只读）。
      return {

        //和person建立引用响应式也会改变person对象的属性
        /*       name : toRef(person,'name'),
               age : toRef(person,'age'),
               salary : toRef(person.job.j1,'salary'),*/
        person,
        ...toRefs(person)
      }
    }
  }
</script>

