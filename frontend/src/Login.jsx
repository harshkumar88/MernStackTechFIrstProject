import React, { Component, useState} from 'react'
import {useHistory} from "react-router-dom"
import Todo from './Todo';
import newhomepage from './newhomepage'

const Login = () => {
    const history=useHistory();
    let ss=""; let n="";
    const [data,set]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
    const change=(event)=>{
         const n=event.target.name;
         
         const val=event.target.value;

        
         

         set({...data,[n]:val})
         
    }
    const send=async(e)=>{
          ss=data.email;
          n=data.name;
           const {name,email,password,phone}=data;
         

           if(name === '' || email==='' || password==='' || phone===''){
               return;
           }
           else{
          e.preventDefault();

          
          
          try{
            const res = await fetch("/login",{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                  name,email,password,phone
                })
            });
                      
            const response=await res.json();
           
            if(response.error=="Rejected"){
                alert("invalid Login,user Not exist")
                console.log("Invalid Login")
            }
            else{
            alert("Succesful Login");
            history.push({
                pathname: '/newhomepage',
                state: { msg: ss,info: n}
            })
  
            }
          }
          catch(e){
  
          }

          
           }
    }
    return (
        <div>
            <div className="container-fluid text-center">
                <h1>Login</h1>
            </div>

            <div className="container  bg-light my-5 w-50 mx-auto">
                <form className="form py-4">
                    <label className="form-label m-1">Name</label><input type="text" className="form-control " name="name" value={data.name} placeholder="Enter your name" required onChange={change}/>               
                    <label className="form-label my-2">Email</label><input type="email"  name="email" value={data.email} className="form-control " placeholder="Enter your name" required onChange={change}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <label className="form-label my-2">Password</label><input type="password"  name="password" value={data.password} className="form-control " placeholder="Enter your name" required onChange={change}/>
                    <small id="PasswordHelp" className="form-text text-muted">Password is remain always safe.</small>
                    <label className="form-label my-2">Phone no.</label><input type="number" name="phone" value={data.phone} className="form-control "  placeholder="Enter your name" required onChange={change}/>
                    <div className="my-3 text-center"><button className="btn btn-danger form-control" onClick={send}>Login</button></div>
                </form>
            </div>
        </div>
    )
}

export default Login
