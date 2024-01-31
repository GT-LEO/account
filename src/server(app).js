const express = require("express");//importing
const cors = require("cors");//importing
const {json, urlencoded} = require("body-parser");//importing
const dotenv = require("dotenv");//importing
const {connectToDataBase} = require("./services/db.services");

const app = express();    //create app
dotenv.config({path:".env"})
const port = 3000; //creating port
const start = async()=> {
    //connect to database
    await connectToDataBase();
    app.listen(port, ()=>{
        console.log(`server started at localhost:${port}`)
    })
};
module.exports = start;