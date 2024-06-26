//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db";

dotenv.config({
    path:'./env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT|| 80000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed!!!",err);

})






