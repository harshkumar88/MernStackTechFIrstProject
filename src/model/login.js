const mongoose=require("mongoose");

const RegisterSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
    },
    phone:{
        type:String,
        required:true,
        maxlength:"10"
    }
})

const ListSchema=new mongoose.Schema({
    
    Email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    data:{
        type:Array,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    }
})

const NotesSchema=new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    record:{
        type:Array,
        required:true
    }
})
const Register=mongoose.model("Record",RegisterSchema);
const List=mongoose.model("keep",ListSchema);
const Notes=mongoose.model("keepnotes",NotesSchema)

module.exports={
    Register,List,Notes
};