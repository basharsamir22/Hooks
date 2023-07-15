import React,{useContext} from "react";
import State from "./components/State";
import Effect from "./components/Effect";
import Reff from "./components/Reffrence";
import Memo from "./components/Memo";
import Reducer from "./components/Reducer";
import { ColorContext } from "./components/Context";
function App() {
  const {data,changeData} =useContext(ColorContext)
  return (
    <div>
      {/* <State></State> */}
      {/* <Effect></Effect> */}
      {/* {data} */}
      {/* {data.id}{data.name} */}
      {/* <Reff></Reff> */}
      {/* <Memo></Memo> */}
      <Reducer></Reducer>
    </div>
  );
}

export default App;
