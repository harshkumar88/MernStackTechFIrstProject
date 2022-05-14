const express=require("express");
const app=express();
const mongoose=require("mongoose");
const sendmail=require("../nodemailer.js")

const router=new express.Router();

const {Register,List,Notes}=require("../model/login.js");

router.use(express.json())
router.use(express.urlencoded({extended:false}))


router.post("/register",async(req,res)=>{
    try{
           const userdata=await Register.find({})
           const finduser=userdata.find((user)=>{
               return user.email===req.body.email
           })
          
           if(finduser ){
            
               if(finduser.password!=req.body.password){
                 if( req.body.password.length<8){
            
                    return res.status(422).json({error:"Rej"});
                }
                  await Register.findOneAndUpdate({email:finduser.email},{
                       $set:{
                           password:req.body.password
                       }
                   })
                   console.log(Register)
                   return res.status(201).json({win:"update"});
               }
               else{
              
               return res.status(422).json({error:"Rejected"});
               }
               
           }
           else if(req.body.phone.length>10  ){
            
            return res.status(422).json({error:"Reject"});
        }
        else if( req.body.password.length<8){
            
            return res.status(422).json({error:"Rej"});
        }

           const register=new Register({
               email:req.body.email,
               name:req.body.name,
               password:req.body.password,
               phone:req.body.phone
           })
          console.log(register)
           const registered=await register.save();
           return res.status(201).json({message:'Sucess'})
    }
    catch(e){
       console.log(e);
       res.send(e);
    }
})

router.post("/login",async(req,res)=>{
    try{
           const userdata=await Register.find({})
           const finduser=userdata.find((user)=>{
               return user.email===req.body.email
           })
            
           if(finduser){
               if(finduser.password===req.body.password){
                
                return res.status(201).json({msg:"success"});
               }
               else{
                return res.status(422).json({error:'Rejected'})
               }
           }
           else{
            return res.status(422).json({error:'Rejected'})
           }

    }
    catch(e){
       console.log(e);
       res.send(e);
    }
})

router.post("/find",async(req,res)=>{
         
    try{
        
        const users=await List.find({});

        const userfind=users.find((user)=>{
            return user.Email===req.body.Email
        })
        
        if(userfind){
            console.log("EE")
            const result=await List.findOneAndUpdate({Email:req.body.Email},{
                $set:{
                 data:req.body.data
                }},{new:true,useFindAndModify:false})

                console.log("partu",result)
                return res.status(201)
        }
       
           const d=new Date().getDate();
           const y=new Date().getMonth();
            const book=new List({
                Email:req.body.Email,
                data:req.body.data,
                day:d,
                month:y
            })
            
                await book.save();
           
        console.log(book)

    }
    catch(e){
        console.log("rroroo"+e)
    }
})

router.post("/putnotes",async(req,res)=>{
         
    try{
        
        const users=await Notes.find({});

        const userfind=users.find((user)=>{
            return user.Email===req.body.Email1
        })
        
        if(userfind){
            console.log("EE")
            const result=await Notes.findOneAndUpdate({Email:req.body.Email1},{
                $set:{
                 record:req.body.record
                }},{new:true,useFindAndModify:false})

                console.log("partu",result)
                return res.status(201)
        }
       
           
            const book=new Notes({
                Email:req.body.Email1,
                record:req.body.record
            })
            
                await book.save();
           
        console.log(book)

    }
    catch(e){
        console.log("rroroo"+e)
    }
})



router.post("/listshow",async(req,res)=>{
         
    try{
        
       
        const users=await List.find({});

        const userfind=users.find((user)=>{
            return user.Email===req.body.Email
        })
           
        if(userfind){
            if(userfind.day!=new Date().getDate() || userfind.month!=new Date().getMonth()){
                console.log("ji")
               const res= await List.deleteMany({
                    day:{$ne:new Date().getDate()}
                })
                console.log("pp",res)
            }
           
        console.log("jlp",userfind)
        return res.status(200).json({f:userfind.data})
        }
        
            
        

    }
    catch(e){
        console.log(e)
    }
})

router.post("/Notesshow",async(req,res)=>{
         
    try{
        
       
        const users=await Notes.find({});

        const userfind=users.find((user)=>{
            return user.Email===req.body.Email1
        })
           
        if(userfind){
        console.log("jlp",userfind)
        return res.status(200).json({f:userfind.record})
        }
        
            
        

    }
    catch(e){
        console.log(e)
    }
})


//router.post("/Sendemail",async(req,res)=>{
    //sendmail(req.body.email,req.body.otp)
         
  
//})
module.exports=router;