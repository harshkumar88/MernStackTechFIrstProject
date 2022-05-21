import React, { useEffect, useState } from 'react'
import Hindi from "./Playlist.jsx";
import Punjabi from "./playlist2.js"
import "./media.scss"

const Music = () => {
    const [add, count] = useState(0);
    const [data, set] = useState(Punjabi)
    const [g, get] = useState(false);
    const [val, pass] = useState(-1);
    const [s, gate] = useState('');
    const [info, run] = useState("");
    const getdata = (e) => {
        const value = e.target.value;
        run(value)
    }
    const [imgchange, use] = useState(false)
    const change = (e) => {
        e.preventDefault();
        if (info == "hindi") {
            set(Hindi);
            count(100);
        } else {
            set(Punjabi);
            count(0);
        }

    }
    const call = (props) => {

        for (var i = 0; i < data.length; i++) {
            document.getElementsByTagName("audio")[i].pause();
            document.getElementsByTagName("audio")[i].controls = false
        }

    }
    const geta=()=>{
        for (var i = 0; i < data.length; i++) {
            document.getElementsByTagName("audio")[i].pause();
           
        }
    }



    return (
        <div>

            <div className="container-fluid text-center">
                <h1>Music APP</h1>
            </div>
            <div className="container mb-5 text-center">
            <button onClick={geta}><img src="https://cdn2.vectorstock.com/i/1000x1000/57/16/red-round-media-button-pause-button-shiny-icon-vector-20055716.jpg" className="img-fluid" style={{width:"30px"}}></img></button>
            </div>

            <div className="container-fluid text-center">
                <form>
                    <input type="search" val={info} onChange={getdata} /><button className="btn btn-outline-primary btn-sm" onClick={change}>Search</button>
                </form>
            </div>
            <hr />

            <div className="container-fluid " style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginBottom: "1%" }}>
                {data.map((ele, id) => {
                    return (
                        <div className="bg-danger mt-3 ml-3 lets text-center " style={{ width: "300px", height: "200px" }} key={id + add}>
                            <span className="inline">{id + 1}.)</span><span style={{ fontSize: "22px", fontWeight: "bold" }}>{ele.Title}</span>
                            <img src={ele.pic} className="img-fluid" style={{ height: "80%", width: "100%" }} />
                            <audio className={id + add} style={{ width: "100%", height: "30px" }}>
                                <source src={ele.song} />
                            </audio>
                            <button style={{ position: "relative", top: "-20%", marginLeft: "85%" }} onClick={() => { return get(true), call(ele.song), gate(id + add), document.getElementsByClassName(id + add)[0].play(), pass(id + add), use(true) }} className="changes"><img src="https://th.bing.com/th/id/R.769109050d360c743deef7977cf51185?rik=TnxLPi%2bjaCAymg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fncE%2fBRG%2fncEBRGpLi.png&ehk=vDHmz7REt9el2ux1lOxcXcW9coIr%2bXrsZqMxnS1XiMs%3d&risl=&pid=ImgRaw&r=0" style={{ width: "20px" }} /></button>

                        </div>

                    )
                })}
            </div>
            
        </div>
    )
}

export default Music
