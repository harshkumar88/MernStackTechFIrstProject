import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import Footer from './Footer';

const Homepagenew = () => {
  const location=useLocation();
  const n=location.state.info
  const e=location.state.msg
 
 
  
  return (
    <div>

    <div className="container-fluid bg-dark text-center" style={{opacity:'0.05'}}>
        <h1 className="text-white p-1">Let's see Our Website</h1>
    </div>
    <div className="container-fluid text-center my-5">
    <div className="py-5">
      <h1 style={{fontSize:"6vw"}}>Which You Like to choose <span className="text-danger">?</span></h1>
      <Button  className="btn  btn-outline-danger btn-sm mr-2"><NavLink exact to="/Placement"  className="btn  btn-outline-danger btn-md">Placement Series</NavLink></Button>

      <Button className="btn  btn-outline-success btn-sm mr-2"><NavLink exact to={{
        pathname:"/Todo",
        state:{
          name:n,
          email:e
        }
      }} className="btn  btn-outline-success btn-md" >ToDo App</NavLink></Button> <Button  className="btn  btn-outline-danger btn-sm"><NavLink exact to={{
        pathname:"/keepApp",
        state:{
          name:n,
          email:e
        }}}  className="btn  btn-outline-danger btn-md">Record KeepApp</NavLink></Button>
      </div>
    </div>
   
     
    </div>
  )
}

export default Homepagenew
