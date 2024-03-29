import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    },
    admittedIn:{
        type: mongoose.Schema.type.ObjectId,
        ref:"hospital"
    },
    
},{timestamps:true})


export const patient=  new mongoose.Schema("patient",patientSchema)