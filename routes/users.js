var express = require('express');
var router = express.Router();

const{createuser,getallusers,updateusers,deleteusers}=require('../controllers/users');
router.post('/CreateUsers',createuser);
router.get('/GetAllUsers',getallusers);
router.put('/UpdateUsers/:userId',updateusers);
router.delete('/DeleteUsers/:userId',deleteusers);

module.exports = router;