import React from 'react'
import { useRef } from 'react';
export const Use_Ref_Hook_Demo = () => {
    var divcontainer = useRef(null);
    var h1container = useRef(null);
    var formContainer= useRef(null);
    var changeH1=()=>{
        h1container.current.style.color="Red";
        h1container.current.style.backgroundColor="Black";    
    }
    var changediv=()=>{
        divcontainer.current.style.border="5px solid brown"
    }
    var loadData=()=>{
        formContainer.current.children[0].value="ABC";
        formContainer.current.children[1].value="XYZ";
        formContainer.current.children[2].value="SAI";
    }
  return (
    <div ref={divcontainer} onClick={changediv}>
        <h1 ref={h1container} onClick={changeH1}>Welcome to useRef Hook</h1>
      <form ref={formContainer}>
        <input type="text" id="first"/>
        <input type="text" id="second"/>
        <input type="text" id="third"/>
      </form>
      <button onClick={loadData}>Load</button>
    </div>
  )
}

export default Use_Ref_Hook_Demo