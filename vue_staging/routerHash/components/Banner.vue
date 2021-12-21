<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="goBack">后退</button>
    <button @click="goForward">前进</button>
    <button @click="goStep">后退2步</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods:{
    goBack(){

      this.$router.back();
    },
    goForward(){
      this.$router.forward();
    },
    goStep() {
      this.$router.go(-2);
    }
  }
}
</script>

<style scoped>

</style>