const express = require("express");//importing
const cors = require("cors");//importing
const {json, urlencoded} = require("body-parser");//importing
const dotenv = require("dotenv");//importing
const {connectToDataBase} = require("./services/db.services");

const userRouter = require("./routers/user.router")


const app = express();    //create app
dotenv.config({path:".env"})
app.use(cors({origin:"*"}));
app.use(urlencoded({extended:true}));
app.use(json());

//definning route
//deffault route
app.post("/",(req,res) =>{
return res.status(200).json({
    message:"Welcome to my API",
    status:"success",
    statusCode:200
})
});

//other routes
app.use("/api/version1", userRouter)


// not found route
app.post("*",(req,res) =>{
    return res.status(400).json({
        message:"Not found",
        status:"error",
        statusCode:400
    })
    });

const port = 3000; //creating port
const start = async()=> {
    //connect to database
    await connectToDataBase();
    app.listen(port, ()=>{
        console.log(`server started at localhost:${port}`)
    })
};
module.exports = start;