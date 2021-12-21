// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from "@/pages/Message";
import News from "@/pages/News";
import Details from "@/pages/Details";

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'about',
			path:'/',
			redirect:'about',
			component:About
		},
		{
			name:'home',
			path:'/home',
			component:Home,
			redirect:'/home/news',
			children:[{
					name:'message',
					path:'message',
				    component:Message,
				    children:[
						{
							name:'detail',
							path:'detail',
							component:Details,
							props({query:{id,title}}){
								return {id,title}
							}
						 }
					]
				},
				{
					name:'news',
					path:'news',
					component:News
				}
			]
		}
	]
})
