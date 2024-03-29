import mongoose from "mongoose"

const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        requried:true,
    }
},{timestapms:true})

export const Category=mongoose.models("Category",categorySchema)