<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>当前求和放大为：{{bigSum}}</h1>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <h3 style="color: red">person 组件总人数为{{persons.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
	import {mapState,mapGetters,mapActions,mapMutations} from "vuex";
  export default {
		name:'Count',
		data() {
			return {
				n:1,
			}
		},
		methods: {

      ...mapMutations('countAbout',{increment:'ADD',decrement:'SUBTRACT'}),
      ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'}),

		},
    computed:{

      //借助mapState生成计算属性，从state中读取数据。（数组写法）--生成的计算属性名需要和state里属性名一致
       ...mapState('countAbout',['sum','school','subject']),
       ...mapState('personAbout',['persons']),

      //...mapGetters('countOptions',{bigSum:'bigSum'}),
     /* ...mapGetters('countAbout',['bigSum']),*/
      bigSum(){
         return this.$store.getters["countAbout/bigSum"]
      }
    }
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
