import React from 'react'
import {useEffect} from 'react'
import { useState } from 'react';
export const UseEffectData = () => {
    var [name,setName]=useState("Jayesh");
    var changeName=()=>{
        setName("Chirag")
    }
    useEffect(()=> {alert ("Hello,Good Morning Class")},[])
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
      <h2>This is useEffect Component</h2>
    </div>
  )
}

export default UseEffectData
