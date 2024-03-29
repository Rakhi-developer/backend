import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.type.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    },
    customer:{
        type: mongoose.Schema.type.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["PANDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.type.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[]
    }

},{timestamps:true})

export const User=mongoose.model("Order",orderSchema)