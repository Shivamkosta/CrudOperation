//import mongoose for DB connectivity
var mongoose = require('mongoose')
//create schema
var albumSchema = new mongoose.Schema(
    {
        userId: {
            type:Number,
            trim: true,
            required:true
        },
        id:{
            type: Number,
            trim:true,
            required:true
        },
        title:{
            type:String,
            required: true
        },
    },
    {timestamps: true}
)
//export schema model
module.exports = mongoose.model('Album',albumSchema);

