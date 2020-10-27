//import model
var Student = require("../model/student");

//Post API
//export post api
exports.createstudent = (req,res)=>{
    console.log("Post API is Running..");//console for debugging
    var body = req.body //req.body used for parse data
    console.log(body);
    var students = new Student(req.body);   //req.body used for parse data
    students.save().then((students)=>{      //.then used for if condition is true then will execute
        res.send({
            message : "Created Student Successfully..." //message for check send response
        });
    }).catch((err)=>{     //It is look for error handling if condition is false it will execute
        res.send(err)
    });
};
//Get API
//export get api
exports.getallstudent = (req,res)=>{
    console.log('Get API is Running...');//console for debugging
    Student.find().then(data=>{  // find method used for searching //.then used for if condition is true then will execute
        res.json({
            data:data
        });
    }).catch((err)=>{     //It is look for error handling if condition is false it will execute
        res.json({
            message:"Something went wrong.."+err    //message for check send response
        });
    });
};
//Update API
//export update api
exports.updatestudent = (req,res)=>{
    console.log(req.params)//params used for passed paremeters in routes from users input//console for debugging
    id=req.params.userId
    console.log(id)
    data = req.body
    console.log(data)

    Student.findByIdAndUpdate(id,{
        ...data},{new:true}).then(()=>{  //.then used for if condition is true then will execute
            res.json({
                success:true,
                message:"Update Successfully"   //message for check send response
            });
        }).catch(err=>{     //It is look for error handling if condition is false it will execute
            res.json({
                message:"something went wrong.."+err
            });
        });
};
//delete API
//export delete api
exports.deletestudent = (req,res)=>{
    id=req.params.userId
    console.log(id);

    Student.findByIdAndRemove(id).then(()=>{    //.then used for if condition is true then will execute
        res.json({
            success : true,
            message:"Delete Successfully"   //message for check send response
        })
    }).catch(err=>{     //It is look for error handling if condition is false it will execute
        res.json({
            message:"something went wrong.."+err    //message for check send response
        })
    })
};