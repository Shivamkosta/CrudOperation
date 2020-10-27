var mongoose = require('mongoose');
var productSchema =  new mongoose.Schema(
    {
        id:{
            type:Number,
            trim:true,
            maxlength:5
        },
        name:{
            type:String,
            trim:true,
            maxlength:32
        },
        price:{
            type:Number,
            maxlength:32,
            trim:true
        }
    }
)
module.exports=mongoose.model('Product',productSchema);