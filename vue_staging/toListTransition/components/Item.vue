<template>
    <li>
      <label>
        <input type="checkbox" :checked="item.done" @change="handleCheck(item)"/>
        <span v-show="!item.isEdit">{{item.title}}</span>
        <input ref="input" v-show="item.isEdit" v-model.trim="changeItem" @blur="updateItem(item)"/>
      </label>
      <button @click="editItem(item)" v-show="!item.isEdit" class="btn btn-danger"  >编辑</button>
      <button @click="deleteItem(item.id)" class="btn btn-danger"  >删除</button>
    </li>
</template>

<script>

export default {
  name: "Item",
  props:['item','index'],
  data(){
    return {
      changeItem : ''
    }
  },
  methods:{
    handleCheck(item){
      item.done = !item.done
    },
    deleteItem(id){
      if (confirm("确定删除吗?")){
       this.$bus.$emit("deleteItem",id,this.index);
      }
    },
    editItem(item){
      if (!item.hasOwnProperty('isEdit')) {
        this.$set(item,'isEdit',true);//响应式的添加属性，使其具有getter setter
      }
      else  item.isEdit = true;
      //vue 会等函数体执行完成后才动态渲染出input，若当isEdit出现变化时每次都渲染会造成性能问题
      this.$nextTick(()=>{ //nextTick 回调函数会在dom更新之后触发
          this.$refs.input.focus();
      })
      
    }
    ,updateItem(item){
      if (this.changeItem){
        this.$bus.$emit("updateItem",item.id,this.changeItem);
      }
      this.changeItem = '';
      item.isEdit = false;
    }
  }
}

</script>

<style scoped>

li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color:gray ;
}
li:hover button {
   display: block;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
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
</style>