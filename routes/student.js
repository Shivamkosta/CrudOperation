//import express module for web application build
var express = require('express');
//connect router to express module
var router = express.Router();
//import controllers file
const {createstudent,getallstudent,updatestudent,deletestudent} = require("../controllers/student");
//create API
router.post("/CreateStudent",createstudent);
router.get("/GetAllStudent",getallstudent);
router.put("/UpdateStudnet/:userId",updatestudent);
router.delete("/DeleteStudent/:userId",deletestudent);
//exports routes
module.exports = router;