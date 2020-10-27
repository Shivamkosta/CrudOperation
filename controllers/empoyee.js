//import model
var Employee = require("../model/employee");//dot used go for back


//Post API
//export post api
exports.createemployee = (req,res)=>{
    console.log('Post API Running') //for debugging code
    var body = req.body //req.body used for parse data
    console.log(body)
    var employees = new Employee(req.body)  //req.body used for parse data
    employees.save().then((employees)=>{    //.then used for if condition is true then will execute       
        res.send({
            message : "Create Employees Successfully"//message for check send response
        })
    }).catch((err)=>{   //It is look for error handling if condition is false it will execute
        res.send(err)
    })
};
//GET API
//export get api
exports.getallemployee = (req,res)=>{   
    console.log('Get Api is Running..');//console for debugging
    Employee.find().then((data)=>{      //.then used for if condition is true then will execute
        res.json({
            data:data
        })
    }).catch(err=>{ //It is look for error handling if condition is false it will execute
        res.json({
            message : "something went wrong.."+err//message for check send response
        })
    })
};
//Update API//export update api
exports.updateemployee = (req,res)=>{
    console.log(req.params);//params used for passed paremeters in routes from users input
    id = req.params.userId
    console.log(id);
    var data = req.body //req.body used for parse data
    console.log(data)

    Employee.findByIdAndUpdate(id,{...data},
        {new:true}).then(()=>{  //.then used for if condition is true then will execute
            res.json({
                success : true,
                message : "Successfully Updated" //message for check send response
            })
        }).catch(err=>{ //It is look for error handling if condition is false it will execute
            res.json({
                message :'something went wrong'+err//message for check send response
            })
        })
};
//delete API//export delete api
exports.deleteemployee = (req,res)=>{
    id = req.params.userId
    console.log(id)
    Employee.findByIdAndRemove(id).then(()=>{   //.then used for if condition is true then will execute
        res.json({
            message : 'Successfully Deleted'//message for check send response
        })
    }).catch(err=>{ //It is look for error handling if condition is false it will execute
        res.json({
            message:'something went wrong'+err//message for check send response
        })
    })
}
