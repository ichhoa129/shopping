const express = require('express');
const router = express.Router();
const md5 = require('md5');
const shortid = require("shortid");
const db = require("../db");

router.get('/register',(req,res)=>res.render('auth/register'));
router.post('/register',(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.Cpassword;
    
    var harshedPass = md5(password);
    var existedEmail = db.get('accounts').find({email: email}).value();
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
        req.body.id = shortid.generate();
        req.body.password = harshedPass;
        delete req.body.Cpassword;
        db.get("accounts")
        .push(req.body)
        .write();
    } 
    res.redirect("auth/login");
})


module.exports = router;