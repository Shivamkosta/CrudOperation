//import mongoose for DB connectivity
var mongoose = require("mongoose");
//create schema
var employeeSchema = new mongoose.Schema(
    {
        empid:{
            type:Number,
            trim:true,
            maxlength:20
        },
        emppost:{
            type:String,
            maxlength:30,
            trim:true
        },
        empsalary:{
            type:Number,
            maxlength:32,
            trim:true
        },
    },
    {timestamps:true}
)
//export schema model
module.exports = mongoose.model('Employee',employeeSchema);