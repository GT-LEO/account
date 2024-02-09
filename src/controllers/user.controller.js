const userModel = require("../models/user.model");
const userController = {};
const nodemailer = require("nodemailer");

//create account
userController.createOne = async(req,res) => {

    const {firstName, lastName, userName, email, password} = req.body;

    try{  //check if the user user already exist
        // console.log(req.body);
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({
                message:"email already exist!",
               status:"error",
               statusCode:400 ,
        
            });
        }
 const user = await userModel.create({firstName, lastName, userName, password, email });
//emailing
//create transporter
const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
pass:process.env.EMAIL_PASSWORD,
user:process.env.EMAIL_FROM,
}
})
    
    //create email options
    const mailOptions = {
        to:email,
        from:process.env.EMAIL_FROM,
        subject:"Account creation successful!",
        html:`
        <body>
        <span style='color:green;'> Welcome to GT's Website! </span> 
        </body>
        `
    }

       //send the email
      transporter.sendMail(mailOptions, function(error, success){
        if(error){
            console.log("error!")
            return res.json({error:error})
        }
        return res.status(200).json({
            message:"account created successfully",
            data:user,
            status:"success",
            statusCode:200,
    })
                          
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

//login a user

//nodemailer


userController.deleteAll =  async(req,res) => {
const deletedUsers = await userModel.deleteMany({})
return res.status(200).json({
 message:"succesfuly deleted all users",
 data:deletedUsers
})
}


userController.getAll =  async(req,res) => {
    const registeredUsers = await userModel.find({})
    return res.status(200).json({
     message:"succesfuly fetched all users",
     numberOfUsers:registeredUsers.length,
     data:registeredUsers
    })
    }



module.exports = userController;





