<template>
	<h2>求和为:{{sum}}</h2>
  <button @click="sum++">点击</button>
  <hr>
  <h2>{{msg}}</h2>
  <button @click="msg+='!'">点击2</button>
  <hr>
  <h2>{{person.name}}</h2>
  <h2>{{person.age}}</h2>
  <button @click="person.name+='@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
</template>

<script>
import {watch, ref,reactive,watchEffect} from 'vue'
	export default {
		name: 'Demo',
    setup: function () {
      //数据
      let sum = ref(0);
      let msg = ref('你好');
      let person = reactive({
        name:"张三",
        age:18,
        job:{
          j1:{
            salary:20
          }
        }
      })
       //监视ref数据
      watch([sum,msg],(newvalue,oldvalue)=>{
           console.log(newvalue)
       },{
         immediate:true
      });

      //监控对象类型的reactive:无法获取正确的oldvalue,此为vue3的bug
      //监控对象全部属性强制开启深度监视，deep属性无效
      watch(person,(newvalue,oldvalue)=>{
        console.log(newvalue,oldvalue)
      })
    //情况四：监视reactive所定义的一个响应式数据中的某个属性
      /* watch(()=>person.name,(newValue,oldValue)=>{
        console.log('person的name变化了',newValue,oldValue)
      })  */

      //情况五：监视reactive所定义的一个响应式数据中的某些属性
      /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        console.log('person的name或age变化了',newValue,oldValue)
      })  */

      //特殊情况
      /* watch(()=>person.job,(newValue,oldValue)=>{
        console.log('person的job变化了',newValue,oldValue)
      },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效 */
     //只要里面使用到了ref或者reactive数据就会自动监视,有点像computed计算属性
      watchEffect(()=>{
            const  x = sum.value;
            console.log("watchEffect")
      })
      return {
        sum,
        msg,
        person
      }
    }
  }
</script>

