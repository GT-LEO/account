const mongoose = require("mongoose");
const dbServices = {};

dbServices.connectToDataBase = async() =>{
    const dbUrl = process.env.DATABASE_URL;
    try{
        const params = {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        const connect = await mongoose.connect(dbUrl, params);
        console.log(`connected to the database ${connect.connection.host}`)
    }
    catch(e){
        console.log(`could not connect to the database ${e}`)
    }
}
module.exports = dbServices;