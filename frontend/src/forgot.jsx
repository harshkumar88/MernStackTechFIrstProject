import React, { Component, useState,useEffect} from 'react'
import {NavLink, useHistory} from "react-router-dom"
import emailjs from 'emailjs-com'
let em=""
let ot=0;
const Forgot = () => {
 
    const[invert,pop]=useState(false);
    const [otpenter,fast]=useState(true);
    const[invert2,pop2]=useState(false);
    const [w,inc]=useState("470px");
    const [boot,line]=useState(true)
    const history=useHistory();
    const [min,Min]=useState(1)
    const [sec,Sec]=useState(59)
    let ss=""; let n="";
    const [data,set]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",otp:"",cnfpassword:""
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

    function generateRandomNumber() {
        var minm = 100000;
        var maxm = 999999;
        return Math.floor(Math
        .random() * (maxm - minm + 1)) + minm;
    }
    
    const call=()=>{
        
        ot=generateRandomNumber();
       
        return;
    }
    const send=async(e)=>{
          
           const {email}=data;
           em=email;
          
           set({
               email:em,
            otp:""
        })
          ot=generateRandomNumber();
          if(email==""){
              return;
          }
         else{

          
          e.preventDefault();
          try{

          const res = await fetch("/Sendemail",{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
              email,otp:ot
            })

            
        });

        const response=await res.json();

        if(response.error=="notexist"){
            alert("User Not exist");
            history.push("/Register")
            return;
        }
    
    }
    catch(e){

    }
       
        
    


          
          alert("OTP sent successfully")
       let i=1;
       let sin=sec;
       let m=min;
      const s= setInterval(()=>{
        console.log(sin)
        
        
        if(sin==0 && m==0){
            clearInterval(s);
        }
        else if(sin==0){
            
            Sec(59);
            sin=59;
            i=1;
            Min(0);
            m--;
        }
        else{
            Sec(sin-1);
            sin=sin-i;
            
        }
       },1000)
       setInterval(()=>{
              call();
              
       },120000)
        pop(true);
        pop2(false)
          
            
          
    }
          
    }
    
  
    
    const check=(e)=>{
        const {otp}=data;
        if(otp==""){
            return;
        }
        else{
            if(otp==ot){
                fast(true);
                setTimeout(()=>{
                    alert("Successfully done..");
                    pop2(true)
                    pop(false)
                },300)
                
               
            }
            else{
                fast(false)
            }
        e.preventDefault();

        
        }

    }
    const move=async(e)=>{
       
        
        const {password,cnfpassword}=data;
       
        if(password=="" || cnfpassword==""){
            return;
        }
        if(password==cnfpassword){
            e.preventDefault();
            try{
            const res = await fetch("/register",{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify({
                 email:em,
                 password
                })
            });
                      
            const response=await res.json();
           
            if(response.error=="Rejected"){
                alert("invalid registration,user Already exist")
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
          else if(response.win=='update'){
            line(true);
            setTimeout(()=>{
                alert("password is changed,successfully")

            
                history.push("/Login")
            },300)
           
          }
        }
        catch(e){
               alert(e)
        }
    }
        else{
            
            e.preventDefault();
            line(false);
        }

        
       
    }
  return (
    <div>
            <div className="container-fluid text-center" >
                <h1>Forgot</h1>
            </div>

            <div className="container  bg-light my-5 mx-auto" style={{width:w}}>
                <form className="form py-4">
                   
                    {invert==true && invert2==false?
                         <><label className="text-danger"><span className="font-weight-bolder" style={{color:"black"}}>Note:</span> OTP expires after {min}:{sec}</label><br/><label className="form-label my-2">OTP</label><input type="text"  name="otp" value={data.otp} className="form-control " placeholder="Enter your OTP" required onChange={change}/><p className="text-right" onClick={send} style={{cursor:"pointer"}}>Resend OTP</p>{otpenter==false?<p className="text-danger">INVALID OTP</p>:""}</>
                    :invert==false && invert2==false?<> <label className="form-label my-2">Email</label><input type="email"  name="email" value={data.email} className="form-control " placeholder="Enter your name" required onChange={change}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small></>:<> <label className="form-label my-2">NewPassword</label><input type="password"  name="password" value={data.password} className="form-control " placeholder="Enter your Password" required onChange={change}/>
                    <label className="form-label my-2">ConfirmPassword</label><input type="password"  name="cnfpassword" value={data.cnfpassword} className="form-control " placeholder="Enter your Password" required onChange={change}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>{boot==false?<p className="text-danger">PASSWORD NOT MATCH</p>:""}</>}

                   
                   
                    <div className="my-3 text-center">{invert==true && invert2==false?<button className="btn btn-danger form-control" onClick={check}>Enter OTP</button>:invert==false && invert2==false?<button className="btn btn-danger form-control" onClick={send}>Send OTP</button>:<button className="btn btn-danger form-control" onClick={move}>Change Password</button>}</div>
                </form>
            </div>
            
        </div>
  )
}

export default Forgot
