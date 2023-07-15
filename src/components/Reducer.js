import React,{useState,useReducer } from "react";
const initialVlue={
    count:0
}
// يمكن فصل هذه الدالة في ملف خاص بها واستدعائه هنا !!
const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return{count:state.count+1}
        case 'decrement':
            return{count:state.count-1}
        case 'reset':
            return{count:0}
        default:
            return{state}
    }
}
function Reducer(){
    // const [value,setValue]=useState(0)
    const[state,dispatch]=useReducer(reducer,initialVlue)
    return(
        <div>
        value is :{state.count}
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
};
export default Reducer