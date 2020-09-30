import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/box/index"
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch=useDispatch()
  const boxList = useSelector(state =>state.ownColor)
  const increase=()=>{
    dispatch({type:"INCREMENT"})
  }
  const decrease=()=>{
    dispatch({type:"DECREMENT"})
  }
  const reset=()=>{
    dispatch({type:"RESET"})
  }
  const changeColor=(e)=>{
    e.preventDefault();
    dispatch({type:"CHANGECOLOR",payload:e.target.value})
  }
  // const showBoxes=()=>{
  //   let temp=[]
  //   for ( let i=0;i<count;i++){
  //     temp.push(<Box id={i}/>)
  //   }
  //   setBoxList(temp);
  // }
  // useEffect(()=>{{showBoxes()}},[count])
  return (
    <div>
      <div className="infor-buttons">
           
        <button onClick={()=>increase()}>increase</button> 
        <button onClick={() => decrease()}>decrease</button>
        <button onClick={() => reset()}>reset</button>
        <input type="text" onChange={(e)=>changeColor(e)}/>
      </div>
      <div className="listBox">
        {/* { boxList.map((item)=> item)} */}
        {boxList && boxList.map((item,index) =><Box id={index}/>)}
      </div>
      
    </div>
  );
}

export default App;
