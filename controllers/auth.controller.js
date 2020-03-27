const md5 = require('md5');
const db = require("../db");

module.exports.login = (req, res) => {
  res.render("auth/login");
};
module.exports.postLogin = (req,res)=>{
    var email= req.body.email;
    var password = req.body.password;
    var acc = db.get('accounts').find({email: email}).value();
    if(!acc){
        res.render('auth/login',{
            errors: ["Account does not exist. "],
            value: req.body
        });
        return;
    }
    var encryptedPass = md5(password);
    if(acc.password !== encryptedPass){
       res.render('auth/login',{ errors:['Wrong password.'], value: req.body});
       return;
    }
    
    res.cookie('accId',acc.id,{
         signed: true
        });
    res.redirect('/users');
}