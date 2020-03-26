var db = require('../db');
module.exports.requireAuth = (req,res,next)=>{
if(!req.cookies.accId){
    res.redirect('/auth/login');
    return;
}
var acc = db.get('accounts').find({id: req.cookies.accId}).value();
if(!acc){
    res.redirect('/auth/login');
    return;
}
  next();
}