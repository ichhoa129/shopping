var db = require('../db');
module.exports.requireAuth = (req,res,next)=>{
  console.log(req.cookies,req.signedCookies);
if(!req.signedCookies.accId){
    res.redirect('/auth/login');
    return;
}
var acc = db.get('accounts').find({id: req.signedCookies.accId}).value();
if(!acc){
    res.redirect('/auth/login');
    return;
}
  res.locals.acc  = acc;
  next();
}