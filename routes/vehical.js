//import express module for web application build
var express = require('express');
//connect router to express module
var router = express.Router();
//import controllers file
const{createvehical,getallvehical,updatevehical,deletevehical}=require("../controllers/vehical");
//create API
router.post("/CreateVehical",createvehical);
router.get("/GetAllVehical",getallvehical);
router.put("/UpdateVehical/:userId",updatevehical);
router.delete("/DeleteVehical/:userId",deletevehical);
//export router
module.exports=router;