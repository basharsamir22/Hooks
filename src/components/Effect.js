import React,{useEffect,useState} from "react";
function Effect(){
    const [count,setState] = useState(0);
    useEffect(()=>{
        console.log("heelo from use effect")
    },[count])
    const handleIncrese=()=> {
        setState(count+1)
    }
    return(
        <div>
            <button onClick={handleIncrese}>+</button>
        </div>
    )
};
export default Effect