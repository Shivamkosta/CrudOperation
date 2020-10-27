//import model
const Album = require ('../model/album');

//Create(POST) API
exports.createalbum = (req,res)=>{
   console.log('Album API is Running...');//console for debugging
    var body = req.body;    //req.body used for parse data
    console.log(body);
    var albums = new Album(req.body);
    albums.save().then((albums)=>{      //.then used for if condition is true then will execute
        res.send({
            message : "Album Successfully Created"//message for check send response
        })
    }).catch((err)=>{   //It is look for error handling if condition is false it will execute
        res.send(err);
    })
};
//GET API
exports.getallalbums = (req,res)=>{
    console.log('Get API is Running...');//console for debugging
    Album.find().then(data=>{   //.then used for if condition is true then will execute
        res.json({
            data:data
        })
    }).catch(err=>{     //It is look for error handling if condition is false it will execute
        res.json({
            message:'Something went wrong..'+err//message for check send response
        })
    })
};

//Update API
exports.updatealbums = (req,res)=>{
    console.log('Update API is Running...');//console for debugging
    console.log(req.params);
    id = req.params.userId; //params used for passed paremeters in routes from users input
    console.log(id);
    data = req.body
    console.log(data);

    Album.findByIdAndUpdate(id,{
        ...data},{new : true}).then(()=>{   //.then used for if condition is true then will execute
            res.json({
                success : true,
                message : 'Update Successfully..'//message for check send response
            })
        }).catch(err=>{  //It is look for error handling if condition is false it will execute
            res.json({
                message : 'Something went wrong...'+err//message for check send response
            })
        })
};

//Delete API
exports.deletealbums = (req,res)=>{
    console.log('Delete API is Running...');//console for debugging
    id = req.params.userId
    console.log(id)
    Album.findByIdAndRemove(id).then(()=>{   //.then used for if condition is true then will execute
        res.json({
            success : true,
            message : 'Delete Successfully'//message for check send response
        })
    }).catch(err=>{      //It is look for error handling if condition is false it will execute
        res.json({
            message : 'something went wrong..'+err//message for check send response
        })
    })
};