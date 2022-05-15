import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>

    <div className="container-fluid bg-dark text-center" style={{opacity:'0.05'}}>
        <h1 className="text-white p-1">Let's see My Website</h1>
    </div>
    <div className="container text-center my-5">
    <div className="py-5">
      <h1>Do you Have an Account<span className="text-danger">?</span></h1>
      <button className="btn  btn-outline-success btn-sm mr-2"><NavLink exact to="/Login" className="btn  btn-outline-success btn-lg" >Yes</NavLink></button> <button  className="btn  btn-outline-danger btn-sm"><NavLink exact to="/Register"  className="btn  btn-outline-danger btn-lg">No</NavLink></button>
      </div>
    </div>
   
     
    </div>
  )
}

export default Homepage
