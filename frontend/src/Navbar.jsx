import React,{useState,useEffect} from 'react'

import {NavLink, useLocation} from 'react-router-dom'
import ".//todo.css"

const Navbar = (props) => {
   const [path,change]=useState();
  const location=useLocation();
  const url=location.pathname;
  const [simple,get]=useState(false);
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
  const shoot=()=>{
      get(true);
      setTimeout(()=>{
            get(false)
      },3000)
  }
 
  
  
  
  return (
    
    <div>
      <div className="container-fluid remove bg-dark ml-auto">
          <nav className="navbar navbar-expand">
          <ul className="navbar-nav  ">
                  <li className="nav-item active "><h2 style={{color:"red"}}>FO<span style={{color:"white",fontSize:"40px"}}>RM</span></h2></li>
                  
              </ul>
              {url!="/"? <ul className="navbar-nav ml-auto " >
                  <li className="nav-item active remove" ><NavLink exact activeClassName="change" to="/" className="nav-link text-white" >Home</NavLink></li>
                  <li className="nav-item active remove" ><NavLink exact activeClassName="change" to="/Register" className="nav-link text-white" >Register</NavLink></li>
                  <li className="nav-item active remove" ><NavLink exact activeClassName="change" to="/Login" className="nav-link text-white">Login</NavLink></li>
                  {email!=undefined?<li className="nav-item active remove" ><NavLink exact activeClassName="change" to={{
        pathname:path,
        state:{
          name,
          email
        }}} className="nav-link text-white">{url=="/Todo"?'KeepApp':'Todo'}</NavLink></li>:""}
              </ul>:""} 
             
          </nav>
      </div>
      {simple==false && url!="/"?
       <div className=" show container-fluid bg-light text-right">
      <button className="btn btn-danger " onClick={shoot}>✋</button>
      </div>
      :""}
      {simple==true && url!="/"?
      <div className="w-100 show s container-fluid bg-danger" style={{position:"sticky",top:"-10px"}}>
     
      <div>
      <nav className="navbar navbar-expand-slg">
      
              {url!="/"? <ul className="navbar-nav ml-auto " >
                  <li className="nav-item active" ><NavLink exact activeClassName="change" to="/" className="nav-link text-white" >Home</NavLink></li>
                  <li className="nav-item active" ><NavLink exact activeClassName="change" to="/Register" className="nav-link text-white" >Register</NavLink></li>
                  <li className="nav-item active" ><NavLink exact activeClassName="change" to="/Login" className="nav-link text-white">Login</NavLink></li>
                  {email!=undefined?<li className="nav-item active" ><NavLink exact activeClassName="change" to={{
        pathname:path,
        state:{
          name,
          email
        }}} className="nav-link text-white">{url=="/Todo"?'KeepApp':'Todo'}</NavLink></li>:""}
              </ul>:""} 
             
          </nav>
         
      </div>
      </div>
      :""}
    </div>
  )
}

export default Navbar
