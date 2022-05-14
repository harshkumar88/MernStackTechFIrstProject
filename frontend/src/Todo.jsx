import React, { useEffect, useState } from 'react'
import { useLocation,NavLink } from "react-router-dom"
import ".//todo.css"
import Navbar from './Navbar';
const Todo = (props) => {

  const [sh,put]=useState(false);
   const [w,inc]=useState("450px")
  let a = 0;
  const location = useLocation();
  const [input, setinput] = useState('');
  const [arr, set] = useState([]);
  const [toggle, change] = useState(false);
  const [idinfo, again] = useState(null);
  const [storedata, store] = useState();

  const pick = props.location.state.email;
  const pickn = props.location.state.name;
  
  const show = async () => {
    const res = await fetch("/listshow", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        Email: pick,

      })
    })

    const respond = await res.json();

    console.log("hlo", respond.f)
   
    set(respond.f)
  }
  useEffect(() => {
    if( window.innerWidth<900)
   
        inc("320px")
    
   
    setTimeout(()=>{
      
      //alert("welcome "+pickn)
    },1000)
    
    show();
  }, [])

  const start = async (props) => {
    console.log(props)
    const res = await fetch("/find", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        Email: pick,
        data: props
      })
    })

  }
  const AddItem = (e) => {
    put(!sh)
    e.preventDefault();
    if(input==""){
      alert("enter your task");
      
    }
    else{
    let da;
   
    if (toggle == false) {
      da = [...arr, { id: new Date().getMilliseconds().toString(), name: input }];
      set(da)

    }
    else {
      da = arr.map((ele) => {
        if (ele.id === idinfo) {
          return { ...ele, name: input }
        }
        return ele;
      })
      set(da);

      change(false)

    
    }
    


    start(da);

    setinput("")

  }
  }
  const del = (ind) => {
    const data = arr.filter((ele) => {
      return ele.id !== ind;
    })
    start(data)
    set(data)
  }
  
  const update = (ind) => {

    const data = arr.find((ele) => {
      return ele.id === ind
    })
    again(data.id)
    store(data);
    setinput(data.name)
    change(true);
  }
  return (
    <div className="bg-dark" style={{height:"100vh",flexGrow:"1"}} >
       <Navbar email={pick} name={pickn}/>
      
      <div className="container-fluid text-center w-100 mb-3 border-bottom ">
        
        <span style={{fontSize:"40px",textShadow:"2px 4px white"}}>Todo List</span>
         
        
        </div>
        
       
        <div className="container text-center bg-light  mb-2 scroll" style={{ width:w,maxWidth:w,zIndex:3}}>
        <div style={{fontVariant:"small-caps"}}  > 
       <img src="https://th.bing.com/th/id/OIP.up57Zn_n-WjmQ8qI6wEy3wHaHa?pid=ImgDet&rs=1" className="img-fluid float-left" style={{width:"40px"}}/>
       <span style={{fontSize:"30px"}} className="border-bottom" >What's Up Today</span>
       </div>

      
        {sh==false?
        <div>
          <button className="btn btn-sm btn-outline-success " onClick={()=>{put(!sh)}}>➕</button>
          <br/>
          </div>
      
        :""}
        {sh==true?
        <div>
          <form method="POST">
            <input type="search" value={input} onChange={(event) => { setinput(event.target.value) }} />{!toggle ? <button className="btn btn-outline-info " onClick={AddItem}>➕</button> : <button className="btn btn-sm bg-gradient" onClick={AddItem}><img src="https://th.bing.com/th/id/OIP.ZqQ-PrOb2lHs4eQJNGYXLQHaHa?pid=ImgDet&rs=1" style={{ width: "20px" }} /></button>}
          </form>
        </div>
        :""}
        
      

   
        <div className="my-3  zoom" >

          {arr.map((ele, id) => {
            return <div className=" border-bottom row text-dark mb-2" key={ele.id}> <div className="col-2 text-danger"> <input className="btn btn-sm bg-gradient" type="checkbox" onClick={() => del(ele.id)} /></div><div className="col-6" style={{ textOverflow: 'ellipsis', wordWrap: "break-word" }}><span style={{ fontSize: "1.5rem", fontVariant: "all-small-caps" }}>{ele.name}</span></div> <div className="col-4" ><button className="btn btn-sm bg-gradient" onClick={() => { update(ele.id) }} ><img src="https://th.bing.com/th/id/OIP.ZqQ-PrOb2lHs4eQJNGYXLQHaHa?pid=ImgDet&rs=1" style={{ width: '20px' }} onClick={()=>{put(!sh)}}/></button></div></div>
          })}
        </div>
        
      </div>
      
        

    </div>
  )
}

export default Todo;
