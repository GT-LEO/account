const userModel = require("../models/user.model");
const userController = {};

//create account
userController.createOne = async(req,res) => {

    const {firstName, lastName, userName, email, password} = req.body;

    try{  //check if the user user already exist
        console.log(req.body);
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({
                message:"email already exist!",
               status:"error",
               statusCode:400 ,
        
            });
        }
        const user = await userModel.create({firstName, lastName, userName, password, email });
        return res.status(200).json({
        message:"account created successfully",
        data:user,
        status:"success",
        statusCode:200,
})

    }
    catch(e){
        console.log(e);
        return res.status(400).json({
        message:"Internal Server Error!",
        status:"error",
        statusCode:400 ,
 
    })
    }
};
module.exports = userController;




//login a user