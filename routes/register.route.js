const express = require('express');
const router = express.Router();
const controller = require('../controllers/register.controller');

router.get('/register',(req,res)=>res.render('auth/register'));
router.post('/register',controller.postRegister);


module.exports = router;