import React, { useState,useEffect } from 'react'
import {useHistory} from "react-router-dom"
import Footer from './Footer';

const Signup = () => {
    const [w,inc]=useState("500px");
    const history=useHistory();
    const [data,set]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
    useEffect(() => {
        if( window.innerWidth<900)
       
            inc("300px")
        
       
        
      }, [])
    const change=(event)=>{
         const n=event.target.name;
         const val=event.target.value;

         set({...data,[n]:val})
    }
    const send=async(e)=>{
           const {name,email,password,phone}=data;
           if(name === '' || email==='' || password==='' || phone===''){
               
           }
           else{
          e.preventDefault();
         
          try{
          const res = await fetch("/register",{
              method:'POST',
              headers:{
                  'Content-Type':"application/json"
              },
              body:JSON.stringify({
                name,email,password,phone
              })
          });
                    
          const response=await res.json();
         console.log(response)
          if(response.error=="Rejected1"){
              alert("invalid registration,user Already exist")
              console.log("Invalid registration")
          }
          else  if(response.error=="emailrej"){
            alert("Email Id is not valid")
            console.log("Invalid registration")
        }
        else  if(response.error=="passrej"){
            alert("Password is not in true format ")
            console.log("Invalid registration")
        }
         else if(response.error=="Reject"){
            alert("invalid registration,Phone no. not valid")
            console.log("Invalid registration")
        }
        else if(response.error=="Rej"){
            alert("invalid registration,Password length Not match")
            console.log("Invalid registration")
        }
          else{
          alert("Succesful registration");
          history.push("/Login")

          }
        }
        catch(e){

        }
          
           }
    }
    return (
        <div>
            <div className="container-fluid text-center" style={{flexGrow:"1"}}>
                <h1>Register</h1>
            </div>

            <div className="container  bg-light my-2 mx-auto" style={{width:w,zIndex:3}}>
                <form method="POST" className="form py-4">
                    <label className="form-label m-1">Name</label><input type="text" className="form-control " name="name" value={data.name} placeholder="Enter your name" required onChange={change}/>               
                    <label className="form-label my-2">Email</label><input type="email"  name="email" value={data.email} className="form-control " placeholder="Enter your email" required onChange={change} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <label className="form-label my-2">Password</label><input type="password"  name="password" value={data.password} className="form-control " placeholder="{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1" required onChange={change} pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/" />
                    <small id="PasswordHelp" className="form-text text-muted">Password is remain always safe.</small>
                    <label className="form-label my-2">Phone no.</label><input type="number" name="phone" value={data.phone} className="form-control "  placeholder="Enter your phone no." required onChange={change}/>
                    <div className="my-3 text-center"><button className="btn btn-danger form-control" onClick={send}>Register</button></div>
                </form>
            </div>
           
        </div>
    )
}

export default Signup
