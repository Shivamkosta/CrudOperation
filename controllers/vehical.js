//import model
var Vehical = require("../model/vehical");

//Post API
exports.createvehical = (req,res)=>{
    console.log("Vehical API Running..");   //console for debugging
    var body = req.body//req.body used for parse data
    console.log(body);
    var vehicals = new Vehical(req.body);//req.body used for parse data
    vehicals.save().then((vehicals)=>{  //.then used for if condition is true then will execute
        res.send({
            message : "Successfully Created Vehical..." //message for check send response
        })
    }).catch((err)=>{       //It is look for error handling if condition is false it will execute
        res.send(err)
    })

};
//Get API
exports.getallvehical = (req,res)=>{
    console.log('Get API is Running..');    //console for debugging
    Vehical.find().then((data)=>{res.json({ //.then used for if condition is true then will execute
        data:data})
    }).catch(err=>{     //It is look for error handling if condition is false it will execute
        res.json({
            message:"Something went wrong"+err  //message for check send response
        })
    })
};

//Update API
exports.updatevehical = (req,res)=>{
    console.log('Update API is Running...');    //console for debugging
    id = req.params.userId;//params used for passed paremeters in routes from users input
    console.log(id);
    data = req.body
    console.log(data);

    Vehical.findByIdAndUpdate(id,{...data},{
        new:true}).then(()=>{   //.then used for if condition is true then will execute
            res.json({
                message:'Update successfully'   //message for check send response
            })
        }).catch(err=>{     //It is look for error handling if condition is false it will execute
            res.json({
                message:'something went wrong..'+err    //message for check send response
            })
        })
};

//Delete API
exports.deletevehical = (req,res)=>{
    console.log('Delete API Running..'); //console for debugging
    id = req.params.userId
    console.log(id);
    Vehical.findByIdAndRemove(id).then(()=>{    //.then used for if condition is true then will execute
        res.json({
            success: true,
            message:'Delete Successfully..' //message for check send response
        })
    }).catch(err=>{     //It is look for error handling if condition is false it will execute
        res.json({
            message:'Something went wrong..'+err    //message for check send response
        })
    })
};