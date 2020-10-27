//import mongoose for DB connectivity
var mongoose = require('mongoose');
//create schema
var studentSchema = new mongoose.Schema(
    {
        id:{
            type:Number,
            maxlength:32,
            trim:true
        },
        name:{
            type:String,
            maxlength:40,
            trim:true
        },
        class:{
            type:String,
            maxlength:20,
            trim:true
        },
        mobile:{
            type:Number,
            trim:true,
            maxlength:10
        },
    },
    {timestamps:true}
)
//exports schema model
module.exports = mongoose.model("Student",studentSchema);