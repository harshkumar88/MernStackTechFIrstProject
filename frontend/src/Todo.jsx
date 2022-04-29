import React, { useEffect, useState } from 'react'
import { useLocation,NavLink } from "react-router-dom"
import ".//todo.css"
import Navbar from './Navbar';
const Todo = (props) => {

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
   
    setTimeout(()=>{
      
      alert("welcome "+pickn)
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
    <div>
       <Navbar email={pick} name={pickn}/>
      <div className="container text-center">
        <div>
          <h1>To do List</h1>
          <form method="POST">
            <input type="search" value={input} onChange={(event) => { setinput(event.target.value) }} />{!toggle ? <button className="btn btn-outline-info " onClick={AddItem}>+</button> : <button className="btn btn-sm bg-gradient" onClick={AddItem}><img src="https://th.bing.com/th/id/OIP.ZqQ-PrOb2lHs4eQJNGYXLQHaHa?pid=ImgDet&rs=1" style={{ width: "20px" }} /></button>}
          </form>
        </div>
        
      </div>
      
    

      <div className="container text-center w-100  my-5 ">
        <div >
        <fieldset className="bg-warning"> <legend style={{transform:"rotate(-5deg)"}}><h1>See your List</h1></legend></fieldset>
         
        </div>
        </div>
        <div className="container text-center w-50  mb-3">
        <div className="my-4 ">

          {arr.map((ele, id) => {
            return <div className="bg-dark border-bottom border-danger row text-white mb-2" key={ele.id}> <div className="col-2 text-danger"><span style={{ fontSize: "2rem" }}>*</span></div><div className="col-6" style={{ textOverflow: 'ellipsis', wordWrap: "break-word" }}><span style={{ fontSize: "1.5rem", fontVariant: "all-small-caps" }}>{ele.name}</span></div> <div className="col-4" ><button className="btn btn-sm bg-gradient" onClick={() => { update(ele.id) }}><img src="https://th.bing.com/th/id/OIP.ZqQ-PrOb2lHs4eQJNGYXLQHaHa?pid=ImgDet&rs=1" style={{ width: '20px' }} /></button> <button className="btn btn-sm bg-gradient" onClick={() => del(ele.id)}><img src="https://static.vecteezy.com/system/resources/previews/000/630/728/original/vector-trash-can-icon-symbol-illustration.jpg" style={{ width: "20px" }} /></button></div></div>
          })}
        </div>
      </div>

    </div>
  )
}

export default Todo;
