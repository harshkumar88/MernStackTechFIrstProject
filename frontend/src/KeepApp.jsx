import React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar"
const See =(props)=>{
    
    /*{props.dat.title && setTimeout(()=>{
        alert("Successfully added ")
    },200)}*/
    return (<> {props.dat.title && <div className="btn-light m-5 " style={{width:"300px",height:"180px",display:"inline-block",overflowWrap:"break-word", boxShadow:"10px 10px 20px  grey,-10px -10px 20px #fffffe",overflow:"-moz-hidden-unscrollable"}}>
     
        { props.dat.title &&<span className="font-weight-bold "> Title:</span>}{props.dat.title && <span className="align-self-sm-end" style={{marginLeft:"79%",width:"0px",height:'0px',cursor:"pointer"}} onClick={()=>{
            props.onSelect(props.id)
       }}>❎</span>}<h5 className="text-success inline-block text-center" style={{fontSize:"110%"}}>{props.dat.title}</h5>
       {props.dat.title &&<hr/>}
        {props.dat.title && <span className="font-weight-bold" > Note:</span> } <div  style={{wordWrap:"break-word",overflow:'auto'}}><h5 className="text-danger inline-block text-center" style={{fontSize:"100%"}}>{props.dat.note}</h5></div>
        
      
    </div>}</>)
}
let ll=[];
    
const Keep = (props) => {
   
    const location = useLocation();
    const pick = props.location.state.email;
    const pickn = props.location.state.name;
    console.log(pick)
    
    
    
    const [text,set]=useState("");
    const title=(event)=>{
       set(event.target.value);
    }
    const [data,setting]=useState("");
    const note=(event)=>{
       setting(event.target.value)
    }
    const [comp,change]=useState([{}]);
    const get=async()=>{

        
        const res = await fetch("Notesshow", {
            method: 'POST',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
              Email1: pick,
            })
          })
          const respond = await res.json();
          change(respond.f);
          for(let i=0;i<respond.f.length;i++){
                ll.push(respond.f[i])
          }
        }
    useEffect(()=>{
        
        get();
    },[])
    const save=async(props)=>{
     
      const res = await fetch("putnotes", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          Email1: pick,
          record: props
        })
      })
    }
    
    const show=(event)=>{
       
        event.preventDefault()
        const Note={
            title:text,
            note:data
        }
        
        change((prevalue)=>{
            return (
               [Note,...prevalue]
            )
        }
        )
        
        
        
       ll.unshift(Note)
        
        console.log(ll)
        
        save(ll);
        set("");
        setting("");
    }

    let a=0;
    const deleteItems=(id)=>{
        change((oldItems) => {
            return oldItems.filter((arrElem,index)=>{
                a=index;
                return  index!=id;
            })
        })
        ll.splice(a,1);
        
        save(ll);
    }

    
    const [s,again]=useState(false);

    return (
        <>
            <div >
            <Navbar email={pick} name={pickn}/>
            <div className="bg-success text-center">
                <h1>Harsh Keep App</h1>
                </div>
                <div className="card border-success   " style={{width:"300px",maxWidth:"500px",margin:"auto",marginTop:"20px", boxShadow:"10px 10px 20px  grey,-10px -10px 20px #fffffe"}}  onDoubleClick={()=>again(false)}>
                <form method="POST" >
                    <input placeholder="TITLE" onChange={title} value={text} onClick={()=>again(true)} className="form-control"/><br />
                    { s && <input placeholder="Write a Note" onChange={note} value={data} className="form-control mb-2"/>}
                    <Button onClick={show} className="align-self-sm-end btn-outline-success " type="submit">➕</Button>
                    </form>
                </div>
                <br/>
                <div style={{backgroundColor:"black",height:"2px",textAlign:"center"}}><span className="rotate" style={{backgroundColor:"yellow",top:"-15px",position:"relative"}}>See Your Notes</span></div>
                <div className="container-fluid row">
                  {comp.map((val,index)=>{
                       return <See dat={val} key={val.id} id={index} onSelect={deleteItems}/>
                  })}
                  </div>
            </div>
        </>
    )
}

export default Keep;