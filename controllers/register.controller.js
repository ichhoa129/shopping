const express = require("express");
const md5 = require('md5');
var Account = require('../models/account.model');

module.exports.postRegister = async (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    var cpassword = req.body.Cpassword;
   
    var harshedPass = md5(password);
    Account.find({email:email}).then((existedEmail)=>{
        if(existedEmail.email){
            return res.render('auth/register',{errors:['Email is already registed.']}); 
           }
        if(password !== cpassword){
            return res.render('auth/register',{errors:["Confirm Password does not match."], value: req.body});
            
        }
        if(password === cpassword){
            data = { email: req.body.email, password: harshedPass}
            Account.create(data);
            return  res.redirect("auth/login");  
        } 
         
    }).catch((err)=>console.log(err.message));
    
}