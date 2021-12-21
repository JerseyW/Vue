<template>
  <ul class="todo-main">
    <transition-group name="animate__animated animate__bounce" appear
                enter-active-class="animate__swing"
                leave-active-class="animate__backOutUp">
      <Item :key="item.id" v-for="(item,index) in list"  :item="item" :index="index" ></Item>
    </transition-group>
  </ul>
</template>

<script>
import Item from "@/components/Item";
import  'animate.css';
export default {
  name: "List",
  components: {Item},
  props:['list']

}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>