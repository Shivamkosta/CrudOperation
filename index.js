//import .env file
require ("dotenv").config();
//import modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongodb = require("mongodb");
const cors = require("cors");
q
const app = express();
//import routes
const Albumroutes = require("./routes/album");
const Vehicalroutes = require("./routes/vehical");
const Studentroutes = require("./routes/student");
const Employeeroutes = require("./routes/employee");
const Usersroutes = require('./routes/users');

//connect mongodb for database connectivity
mongoose.connect("mongodb://localhost:27017/shivam",{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(()=>{
    console.log('DB CONNECTED...');
}).catch((err) => console.log(err))

//use middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());

//my routes API
app.use("/api",Albumroutes);
app.use("/api",Vehicalroutes);
app.use("/api",Studentroutes);
app.use("/api",Employeeroutes);
app.use("/api",Usersroutes);

//create port
 const port = process.env.PORT||4500

//server create
app.listen(port,()=>console.log(`Running server on port ${port}`));