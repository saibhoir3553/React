import React from 'react'
import { useState } from 'react';
export const ControlInputForm = () => {
    var[uname,setUname]=useState("");
    var[uemail,setUemail]=useState("");
    var[uage,setUage]=useState("");
    var[users,setUsers]=useState([]);

    var changeName=(event)=>{
        console.log(event.target.value);
        setUname(event.target.value);
    }
    var changeEmail=(event)=>{
        console.log(event.target.value);
        setUemail(event.target.value)
    }
    var changeAge=(event)=>{
        console.log(event.target.value);
        setUage(event.target.value);
    }
    var handleSubmit=(event)=>{
      event.preventDefault();
      if(uname&&uage&&uemail)
      {
        var person={uname,uemail,uage};
        setUsers((p)=>{return[...p,person]});
        setUname("");
        setUemail("");
        setUage("");
      }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" id="uname" onChange={changeName} value={uname}></input><br/>
        <label>UserEmail</label>
        <input type="email" id="uemail" onChange={changeEmail} value={uemail}></input><br/>
        <label>UserAge</label>
        <input type="number" id="uage" onChange={changeAge} value={uage}></input> <br/>
        <input type="submit" value="Submit"></input>
      </form>
      <h3>{uname}---{uemail}---{uage}</h3>
      {users.map((user)=>{
      return(<h2>{user.uname}---{user.uemail}---{user.uage}</h2>)
      })}
    </div>
  )
}

export default ControlInputForm 