<template>
   <button @click="isShow=true">弹窗</button>
   <!--弹框传送走到body--->
   <teleport to="body">
     <div v-if="isShow" class="mask">
       <div  class="dialog">
         <h3>弹窗</h3>
         <button @click="isShow=false">关闭弹窗</button>
       </div>
     </div>

   </teleport>

</template>

<script>
import {ref} from "vue";

export default {
  name: "Dialog",
  setup(){
     let isShow = ref(false);

     return { isShow}
  }
}
</script>

<style scoped>
   .dialog{
     text-align: center;
     width: 300px;
     height: 300px;
     background-color: green;
     position: absolute;
     top: 50%;
     left: 50%;
     transform:translate(-50%,-50%) ;
   }
   .mask{
     width: 100%;
     position: absolute;
     top: 0;
     bottom: 0;
     background-color: rgba(0,0,0,0.5);
   }
</style>