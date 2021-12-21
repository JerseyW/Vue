/**
 @author: Jersey
 @create: 2021-12-19 11:01
 @version: V1.0
 @slogan: 业精于勤,荒于嬉;行成于思,毁于随。
 @description: hooks 函数
 */
import {onBeforeUnmount, onMounted, reactive} from "vue";

export default function (){
    let point = reactive({
        x:0,
        y:0
    })
    function savePoint(e){
        point.x= e.pageX
        point.y= e.pageY
    }

    onMounted(()=>{
        window.addEventListener("click",savePoint)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',savePoint)
    })

    return point
}

