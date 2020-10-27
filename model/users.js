var mongoose = require('mongoose');
var userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            maxlength:32
        },
        lastname:{
            type:String,
            trim:true,
            maxlength:32
        },
        email:{
            type:String,
            trim:true,
            required:true
        },
    },
    {timestamps:true}
    
)
module.exports=mongoose.model("Users",userSchema);