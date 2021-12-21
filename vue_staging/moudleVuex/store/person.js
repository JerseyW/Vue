/**
 @author: Jersey
 @create: 2021-12-17 19:40
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description:
 */

import axios from "axios";
import {nanoid} from "nanoid";
//Person 组件配置
export default  {
    namespaced:true,
    actions:{
        addFromServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    console.log(error.message);
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.persons.push(value);
        }
    },
    state:{
        persons:[
            {id:'001',name:"jersey"}
        ]

    },
    getters:{}
}