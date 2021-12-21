/**
 @author: Jersey
 @create: 2021-12-16 21:01
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description:
 */
<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>

import Search from "@/components/Search";
import List from "@/components/List";
export default {
  name: "App",
  components: {List, Search}
}
</script>

<style scoped>


</style>