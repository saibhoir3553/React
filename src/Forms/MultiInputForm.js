import React from 'react'
import { useState } from 'react';
export const MultiInputForm = () => {
    var[person,setPerson]=useState({uname:"",upass:"",uemail:"",uage:""});
    var[person,setPerson]=useState([]);
    var changeData=(event)=>{
      console.log(event.target.id);
      console.log(event.target.value);
      var key=event.target.id;
      var value=event.target.value;
      setPerson({...person,[key]:value});
    }
    var handleSubmit=(event)=>{
      event.preventDefault();
      if(person.uname && person.uemail && person.upass && person.uage)
      {
        setPeople((p)=>{return[...p,person]})
      }
      setPerson({uname:"",upass:"",uemail:"",uage:""})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" id="uname" onChange={changeData} value={person.uname}></input> <br/>
        <label>UserPassword</label>
        <input type="password" id="upass" onChange={changeData} value={person.upass} ></input> <br/>
        <label>UserEmail</label>
        <input type="email" id="uemail" onChange={changeData} value={person.uemail}></input> <br/>
        <label>UserAge</label>
        <input type="number" id="uage" onChange={changeData} value={person.uage}></input> <br/>
        
        <input type="submit" value="Submit"></input>
      </form>

      <h3>{person.uname}---{person.upass}---{person.uemail}---{person.uage}</h3>
      {people.map((person)=>{
       return(<div>
        <h2>{person.uname}---{person.upass}---{person.uemail}---{person.uage}---</h2>
       </div>)
      })}
       
    </div>
  )
}

export default MultiInputForm 