const express = require("express");
const {createOne, deleteAll, getAll} = require("../controllers/user.controller")


//create router
const router = express.Router();

//declaring end-point
router.post("/register", createOne);
router.delete("/delete-all",deleteAll)
router.get("/get-all",getAll)

module.exports = router;
