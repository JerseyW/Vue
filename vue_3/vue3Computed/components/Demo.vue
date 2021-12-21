<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	<span>全名：{{person.fullName}}</span>
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script>
	import {reactive,computed} from 'vue'
	export default {
		name: 'Demo',
    setup: function () {
      //数据
      let person = reactive({
        firstName: '张',
        lastName: '三'
      })
      //简写方式
      /* person.fullName = computed(()=>{

         return person.firstName + '-'+person.lastName
       })*/
      //完整写法
      person.fullName = computed({
        get() {
          return person.firstName + '-' + person.lastName
        },
        set: function (value) {
          let split = value.split('-');
          person.firstName = split[0];
          person.lastName = split[1];
        }
      })
      //返回一个对象（常用）
      return {
        person
      }
    }
  }
</script>

