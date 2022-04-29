import React,{useState,useEffect} from 'react'

import {NavLink, useLocation} from 'react-router-dom'
import ".//todo.css"

const Navbar = (props) => {
   const [path,change]=useState();
  const location=useLocation();
  const url=location.pathname;
  let email="";
  let name="";
  try{
      email=props.email;
      name=props.name
     
  }
  catch{
    
  }
  useEffect(()=>{
    if(url=="/Todo"){
      change("/keepApp")
    }
    else if(url=="/keepApp"){
      change("/Todo")
    }
  },[])
 
  
  
  
  return (
    
    <div>
      <div className="container-fluid bg-dark ml-auto">
          <nav className="navbar navbar-expand-sm  ">
          <ul className="navbar-nav  ">
                  <li className="nav-item active "><h2 style={{color:"red"}}>FO<span style={{color:"white",fontSize:"40px"}}>RM</span></h2></li>
                  
              </ul>
              {url!="/"? <ul className="navbar-nav ml-auto " >
                  <li className="nav-item active "><NavLink exact activeClassName="change" to="/" className="nav-link text-white" >Home</NavLink></li>
                  <li className="nav-item active "><NavLink exact activeClassName="change" to="/Register" className="nav-link text-white" >Register</NavLink></li>
                  <li className="nav-item active"><NavLink exact activeClassName="change" to="/Login" className="nav-link text-white">Login</NavLink></li>
                  {email!=undefined?<li className="nav-item active"><NavLink exact activeClassName="change" to={{
        pathname:path,
        state:{
          name,
          email
        }}} className="nav-link text-white">{url=="/Todo"?'KeepApp':'Todo'}</NavLink></li>:""}
              </ul>:""} 
             
          </nav>
      </div>
    </div>
  )
}

export default Navbar
