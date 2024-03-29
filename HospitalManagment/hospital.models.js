import mongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        required:truncate
    },
    specializedIn:[
        {
            type:String,
        }
    ]

},{timestamps:true})


export const hospital=  new mongoose.Schema("hospital",hospitalSchema)