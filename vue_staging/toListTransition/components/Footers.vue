<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{finishItem}}</span> / 全部 {{this.list.length}}
    </span>
    <button @click="clearAllFinishItem" class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
import pubSub from "pubsub-js";

export default {
  name: "Footers",
  props:['list'],
  methods:{
    clearAllFinishItem(){
     //发布消息
      pubSub.publish("clearFinishItem");
    },
    handleAll(done){

      this.list.forEach((todo)=>{
        todo.done = done
      })

    }
  },
  computed:{
    finishItem(){
     return  this.list.reduce((pre,current)=>{

           return pre + (current.done ?  1 :0);
     },0)
    },
    isAll:{
      set(value){
         this.handleAll(value);
      },
      get(){
        return this.list.length && this.finishItem === this.list.length
      }
    }
  }

}
</script>

<style scoped>
.btn {

  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}


.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>