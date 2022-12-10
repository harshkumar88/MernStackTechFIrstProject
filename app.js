const express=require("express");
const app=express();
const port=process.env.PORT || 5000;
const registerRouter=require('./src/router/register.js')
const path=require("path");
const cors = require('cors');
const bodyParser = require('body-parser');

require("./src/db/mongoose")
app.use(registerRouter)


  app.get("*", function (req, res) {
    app.use(express.static(path.resolve(__dirname,'frontend','build')));
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
   
  })
  


app.listen(port,()=>{
    console.log("you are on port ",port)
})