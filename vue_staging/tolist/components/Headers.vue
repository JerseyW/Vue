<template>
  <div class="todo-wrap">
    <div class="todo-header">
      <input @keyup.enter="addItem" v-model.trim="keyWord" type="text" placeholder="请输入你的任务名称，按回车键确认"/>
    </div>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "Headers",
  props:['list'],
  data(){

    return {
      keyWord:""
    }
  },methods:{

    addItem(){
        if (this.keyWord){
          this.list.push({
            id:nanoid(),
            title:this.keyWord,
            done:false
          });
          this.keyWord = '';
        }

    }
  }
}
</script>

<style scoped>

.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>