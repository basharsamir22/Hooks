import React,{useState,useMemo } from "react";
function Memo(){
    const [counter,setCounter]=useState(0)
    const [test,setTest]=useState(0)
    var randomColor ="#"+Math.floor(Math.random()*16777215).toString(16);
    const colordiv=useMemo(()=>{
        return(
            <div style={{color:randomColor}} >
            value is {counter} := {counter*2}
            </div>
        )
    },[counter])
    return(
        <div>
            {colordiv}
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setCounter(counter-1)}>-</button>
            <button onClick={()=>setTest(test+1)}>test</button>
        </div>
    )
};
export default Memo