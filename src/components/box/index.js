import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useState} from "react"
const Box = ({id}) => {const dispatch=useDispatch()
    const color=useSelector((state)=>state.color);
    const ownColor=useSelector((state)=>state.ownColor[id].value)
    const changeColor=(e)=>{
        e.preventDefault();
        dispatch({type:"CHANGEOWNCOLOR",payload:{value:e.target.value, id:id}})
      
       // console.log(ownColor," ",color)
    }
    return (
        <div className="dien-Box" style={{backgroundColor:ownColor?ownColor:color}}>
            <h3>Colorful Box</h3>
            <input type="text" onChange={(e)=>changeColor(e)}/>
        </div>
        
        
    )
}

export default Box
