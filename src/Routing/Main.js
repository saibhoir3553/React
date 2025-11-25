import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export const Main = () => {
  return (
    <div style={{backgroundColor:"lightgray",width:"600px",height:"300px"}}>
      <h1>This is Main Component</h1>
      <Link to="/">Main</Link>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Products">Products</Link>
      <Outlet/>
    </div>
  )
}

export default Main
