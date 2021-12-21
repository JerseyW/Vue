/**
 @author: Jersey
 @create: 2021-12-17 19:40
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description:
 */
//Count 组件配置
export  default  {
    //启用命名空间适应模块化
    namespaced:true,
    //响应组件的动作
    actions:{
        addOdd(context,value){
            if (context.state.sum % 2 ){
                context.commit('ADD',value);
            }
        },
        addWait(context,value){
            setTimeout(()=>{
                context.commit('ADD',value);
            },500);
        }
    },
    //操作数据
    mutations:{
        ADD(state,value){
            state.sum += value;
        },
        SUBTRACT(state,value){
            state.sum -= value;
        },
    },
    //用于存储数据,相当于vue的data
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    //将state的数据进行加工,相当于vue的计算属性computed
    getters:{
        bigSum(state){
            return state.sum * 10;
        }
    }
}