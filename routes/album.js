//import express module for web application build
var exrpess = require('express');
//connect router to express module
var router = exrpess.Router();
//import controllers files
const {createalbum,getallalbums,updatealbums,deletealbums}=require('../controllers/album.js');
//create API
router.post('/CreateAlbums',createalbum);
router.get('/GetAllAlbums',getallalbums);
router.put('/UpdateAlbums/:userId',updatealbums);
router.delete('/DeleteAlbums/:userId',deletealbums);
//exports routes
module.exports = router;