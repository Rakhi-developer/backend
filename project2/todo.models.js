import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
content:{
    type: String,
    required: true,
},
complete:{
     type: Boolean,
     default: false
},
createrBy:{
     type:mongoose.Schema.types.ObjectId,  //dusre modal ka reference.
     ref:"User"
},
subTodos:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"subuTodo"  
    }
]
//array of sub todos.

},{timestamps:true})
export const Todo = mongoose.model('Todo',todoSchema)