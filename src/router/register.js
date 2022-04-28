const express=require("express");
const app=express();
const mongoose=require("mongoose");

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
               console.log(finduser)
               return res.status(422).json({error:"Rejected"});
           }
           else if(req.body.phone.length>10 ){
            
            return res.status(422).json({error:"Reject"});
        }

           const register=new Register({
               email:req.body.email,
               name:req.body.name,
               password:req.body.password,
               phone:req.body.phone
           })

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
       
           
            const book=new List({
                Email:req.body.Email,
                data:req.body.data
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
module.exports=router;