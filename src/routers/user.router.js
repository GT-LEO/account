const express = require("express");
const {createOne} = require("../controllers/user.controller")


//create router
const router = express.Router();

//declaring end-point
router.post("/register", createOne);
module.exports = router;
