/**
 @author: Jersey
 @create: 2021-12-17 11:28
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description: vuex 的 store
 */
import  Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import countOptions from "@/store/count";
import personOptions from "@/store/person";

//vuex 模块化配置
export  default  new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout: personOptions
    }
});