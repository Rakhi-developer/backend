import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required: true
    },
    qualification:{
        type:String,
        required:true
    },
    exprienceInYear:{
        type:Number,
        default:0
    },
    workInHospitals:[
        {
            type:mongoose.Schema.type.ObjectId,
            ref:"Hospital",
        },
    ]
},{timestamps:true})


export const doctor=  new mongoose.Schema("doctor",doctorSchema)