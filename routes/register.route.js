const express = require('express');
const router = express.Router();
const md5 = require('md5');
var Account = require('../models/account.model');

router.get('/register',(req,res)=>res.render('auth/register'));
router.post('/register',(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.Cpassword;
    
    var harshedPass = md5(password);
    var existedEmail = Account.find({email:email});
    if(existedEmail){
         res.render('auth/register',{errors:['Email is already registed.']
        });
         return;
        } 
    if(password !== cpassword){
        res.render('auth/register',{errors:["Confirm Password does not match."], value: req.body});
        return;
    }
    if(password === cpassword){
        req.body.password = harshedPass;
        delete req.body.Cpassword;
        Account.update(req.body);
    } 
    res.redirect("auth/login");
})


module.exports = router;