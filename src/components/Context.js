import React,{createContext,useState} from "react";
const ColorContext = createContext()
function ContextProvider({children}){
    // const[data, setState]=useState('white')
    const[data, setState]=useState({id:'1',name:'bashar'})

    // const changeData=(color)=>{
    //     setState(color)
    // }
    const changeData=(id,name)=>{
        setState({id,name})
    }
    return(
        <ColorContext.Provider value={{data,changeData}}>
            {children}
        </ColorContext.Provider>
    )
};
export {ContextProvider,ColorContext} 