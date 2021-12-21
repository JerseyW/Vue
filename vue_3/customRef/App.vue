<template>
  <input type="text" v-model="keyWord"/>
  <h3>{{keyWord}}</h3>

</template>

<script>

import {customRef} from "vue";

export default {
  name: 'App',
  setup: function () {

    //自定义ref
    function  myRef(value,delay){
      let timer;
      return customRef((track,trigger)=>{

        return {

           get(){
              track();//通知vue追踪keyWord的变化
              return value;
           },
           set(newValue){
             clearInterval(timer);
             timer = setTimeout(()=>{
               value = newValue;
               trigger();//告诉vue重新解析模板
             },delay)
           }
        }
      })
    }

    let  keyWord = myRef('hello',1000);
    return {keyWord}
  }
}
</script>

