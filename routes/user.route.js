const    express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')



//get and show users
router.get('/',controller.index);
router.get('/create',controller.create);
//search user matched chars
router.get('/search',controller.search); 
//get id and render from db for view
router.get('/view/:id',controller.viewId);

//create users
router.post('/create',controller.postCreate);

module.exports = router;
