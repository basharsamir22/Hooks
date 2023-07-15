import React,{useRef,useContext} from "react";
import { ColorContext } from "./Context";
function Reff(){
    const {data,changeData} =useContext(ColorContext)
    const valueInput =useRef(null)
    const focus =()=>{
        valueInput.current.focus();
        console.log(valueInput.current.value)
        // changeData("5",valueInput.current.value)
        changeData(Math.random(),valueInput.current.value)
    }
    return(
        <div>
            <input type="text" ref={valueInput}/>
            <button onClick={focus}>Foucs</button>
        </div>
        
    )
}
export default Reff
