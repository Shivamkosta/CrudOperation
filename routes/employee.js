//import express module for web application build
var express = require('express');
//connect router to express module
var router = express.Router();
//import controllers files
const{createemployee,getallemployee,updateemployee,deleteemployee}= require("../controllers/empoyee");
//create API
router.post("/CreateEmployee",createemployee);
router.get("/GetAllEmployee",getallemployee);
router.put("/UpdateEmployee/:userId",updateemployee);
router.delete("/DeleteEmployee/:userId",deleteemployee);
//exports routes
module.exports = router;