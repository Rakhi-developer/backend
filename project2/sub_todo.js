import mongoose from "mongoose"

const subtodoSchema = new monooges.schema({
    content:{
        type: String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

export const subTodo = monooges.model('subTodo',subtodoSchema);

