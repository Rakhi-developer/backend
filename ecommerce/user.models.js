import mongoose from "mongoose";

const userSchema  =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
       
    }
   //timestamps two fields deta hai  
    // createdAt => a date representing when the document was created.
    //updatedAt => a date representing when the document was updated 
},{timestamps:true})   
                                                      

export const User= mongoose.model("User",userSchema)                                                     