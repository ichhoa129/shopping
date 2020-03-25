const    express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')
const validate = require("../validate/user.validate")



//get and show users
router.get('/',controller.index);
//cookie
router.get('/cookie',(req,res,next)=>{
     res.cookie('user-id',12345);
     res.send('Cookie');
})
router.get('/create',controller.create);
//search user matched chars
router.get('/search',controller.search); 
//get id and render from db for view
router.get('/view/:id',controller.viewId);

//create users
router.post('/create',validate.postCreate,controller.postCreate);

module.exports = router;
