var Users = require('../model/users');

//Create API
exports.createuser = (req,res)=>{
//validate request
console.log('Post API is Running..');

//Create api Users
const users = new Users({
    name:req.body.name,
    lastname:req.body.lastname,
    email : req.body.email
});
//Save users in the database
users.save(function(err){
    if(err){
        return next(err);
    }
    res.send('POSt API successfully')
})}

//Get API
exports.getallusers = (req,res)=>{
    console.log('Get API is Running...');
    Users.find().then((data)=>{
        res.json({
            data : data
        })
    }).catch(err=>{
        res.json({
            message : 'Get API is not found'
        })
    })
}

//Update API
exports.updateusers = (req,res)=>{
console.log('Update API is Running...');
id=req.params.userId;
console.log(id);
data = req.body;
console.log(data);

Users.findByIdAndUpdate(id,{...data},{new:true}).then(()=>{
    res.json({
        success:true,
        message:'Update successfully'
    })
}).catch(err=>{
    res.json({
        message : 'not updated'+err
    })
})
};

//Delete API
exports.deleteusers = (req,res)=>{
    console.log('Delete Api is running...');
    id=req.params.userId;
    console.log(id);
    Users.findByIdAndRemove(id).then(()=>{
        res.json({
            message:'delete successfully'
        })
    }).catch(err=>{
        res.json({
            message:'Not deleted'+err
        })
    })
}
