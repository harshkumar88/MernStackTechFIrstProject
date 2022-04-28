const express=require("express");
const app=express();
const port=process.env.PORT || 5000;
const registerRouter=require('./src/router/register.js')

require("./src/db/mongoose")

app.use(registerRouter)

app.get("/",(req,res)=>{
    res.send("Hlo Harsh");
})
app.get("/about",(req,res)=>{
    res.send("Hlo Harsh bansal");
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));
}

app.listen(port,()=>{
    console.log("you are on port ",port)
})