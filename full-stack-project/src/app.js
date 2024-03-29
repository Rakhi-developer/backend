import  express  from "express";
import cors from "cors"
import cookieParser from "cookie-parser";    //cookies ko acces kr pao

// What is Cross-Origin Resource Sharing?
// Cross-origin resource sharing (CORS) is a mechanism for integrating applications.
//  CORS defines a way for client web applications
//  that are loaded in one domain to interact with resources in a different domain.
const app = express()  
 app.use(cors({                                    
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(expree.static("public"))
app.use (cookieParser())




export{app}