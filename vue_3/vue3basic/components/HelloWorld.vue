<template>
   <slot name="span"></slot>
  <!--组件模板可以没有根标签-->
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h2>{{job.salary}}</h2>
  <h2>{{job.type}}</h2>
  <h2>{{hobby}}</h2>
  <button @click="changeInfo">点击</button>
  <button @click="test">触发自定义事件</button>
</template>

<script>

import {h,ref,reactive} from 'vue';
export default {
  name: 'App',
  props:['mes'],
  emits:['showHelloMsg'],
  beforeCreate() {
    console.log('---beforecreate--');
  },
  setup(props,context){
    console.log(props);
    console.log(context);
    console.log(context.slots);

    console.log('---setup--');
    console.log(this)//undefined
    let name = ref("张三");//定义响应数据(推荐基本类型使用)
    let age = ref(18);
    //定义对象及数组类型的响应数据
    let job = reactive({
      type:"前端",
      salary:"30K"
    })
    let  hobby = reactive(['喝酒','睡觉'])

    function changeInfo() {
      age.value = 20;
      name.value = 'jane';
      job.salary = '40K';
      job.type = '后端';
      hobby[0]= '代码'
    }

    function  test(){
       context.emit('showHelloMsg','66666');
    }
    return {
      name,
      age,
      job,
      changeInfo,
      hobby,
      test

    }
    //返回渲染函数
    // return ()=>   h('h1',"渲染h1")
  }
}
</script>
<style>

</style>
