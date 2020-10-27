//import mongoose for DB connectivity
var mongoose = require('mongoose');
//create schema
var vehicalSchema = new mongoose.Schema(
    {
        id:{
            type : Number,
            trim:true,
            maxlength:32
        },
        name:{
            type:String,
            maxlength:50
        },
        color:{
            type:String,
            trim:true,
            maxlength:30
        },
        price:{
            type:Number,
            maxlength:10,
            required:true
        },
    },
    {timestamps:true}
)
//exports schema
module.exports = mongoose.model("Vehical",vehicalSchema);