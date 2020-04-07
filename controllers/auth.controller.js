const md5 = require('md5');
const Account = require('../models/account.model');

module.exports.login = (req, res) => {
  res.render("auth/login");
};
module.exports.postLogin = async (req,res)=>{
    var email= req.body.email;
    var password = req.body.password;
    var acc = await Account.find({email: email});
    if(!acc){
        res.render('auth/login',{
            errors: ["Account does not exist. "],
            value: req.body
        });
        return;
    }
    var encryptedPass = md5(password);
    if(acc[0].password !== encryptedPass){
       res.render('auth/login',{ errors:['Wrong password.'], value: req.body});
       return;
    }
    
    res.cookie('accId',acc._id,{
         signed: true
        });
    res.redirect('/users');
}