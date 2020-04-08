const express = require('express');
const router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })
const controller = require('../controllers/user.controller');
const validate = require("../validate/user.validate");


//get and show users
router.get('/',controller.index);
//cookie
router.get('/create',controller.create);
//search user matched chars
router.get('/search',controller.search); 
//get id and render from db for view
router.get('/view/:id',controller.viewId);

//create users
router.post('/create',upload.single('avatar'),validate.postCreate,controller.postCreate);

module.exports = router;
