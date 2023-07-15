import React,{useState} from "react";
function State(){
    const [count,setState] = useState(0);
    const [text,setText] = useState('bashar');
    const handleIncrese=()=> {
        setState(count+1)
    }
    const handleDencrese=()=> {
        setState(count-1)
    }
    const handleText= (e) =>{
        setText(e.target.value)
        console.log(text)
    }
    return(
        <div>
            <button onClick={handleIncrese}>+</button>
            <button onClick={handleDencrese}>-</button>
            <label>{text} is {count}</label>
            <input type="text" onChange={handleText}></input>
        </div>
    )
};
export default State