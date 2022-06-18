import React, { useState } from 'react'
import courses from './Courses.js'
import  './todo.css'
import {dsa,os,dbms} from './Dsa'
const Placement = () => {
    const [see,hide]=useState(false)
    const [s,sh]=useState(true)
    const [value,val]=useState("")
    const [data, set] = useState(courses);
    const [list,change]=useState(dsa);
    const show=(props)=>{
     

        if(props=="Data Structures And Algorithms"){
            change(dsa);
        }
        else if(props=="Operating System"){
            change(os)
        }
        else{
            change(dbms)
        }
        hide(true)
    }
    return (
        <div >
        { see?
            <div className="container-fluid bg-dark w-100 text-right" style={{position:"absolute",height:"89vh",zIndex:"3",opacity:"0.97"}}>
            <button className="btn btn-danger fluid-right" onClick={()=>{hide(false);sh(true)}}>X</button>
          {s? <div className="text-center text-white">
                    {
                        list.map((ele,idx)=>{
                              return( <div key={idx} style={{cursor:"pointer"}}>
                                   <h3 onClick={()=>{sh(false);val(ele)}}>{ele.topic}</h3>
                                   <hr/>
                               </div>
                              )
                        })
                    }
                </div>:""}

               {s==false?<div className="text-center text-white">
                     <h2 className="mb-3">{value.topic}</h2>
                    <a href={value.link} className="btn text-white btn-outline-success btn-lg" target="_blank">Lectures</a> <a href={list==dsa?`https://450dsa.com/${value.short}`:value.short} className="btn text-white btn-outline-danger btn-lg" target="_blank">Questions</a>
                </div>:""}
            </div>
       :"" }

            <div className="container-fluid text-center" ><h1>Placement Preparations</h1></div>
            <hr />
            <div className="container-fluid mb-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                {
                    data.map((ele, idx) => {
                        return (
                            <div key={idx} className="card text-center bg-dark text-white mt-2" style={{ height: "200px", width: "400px",cursor:"pointer" }} onClick={()=>{
                                show(ele.Title)
                            }}>
                                <div >
                                    <h4 className="card-title" style={{fontSize:"1.2rem"}}>{ele.Title}</h4>
                                    
                                   
                                </div>
                                <div className="container">
                                    <img src={ele.img} className="img-fluid" style={{width:"100%",height:"140px"}}/>
                                </div>
                                {/*<button className="btn  btn-primary ml-auto" style={{width:"100%",top:"4%",position:"relative",marginRight:"10px"}}>Play</button>*/}
                               
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Placement
