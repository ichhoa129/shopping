var Account = require('../models/account.model');

module.exports.requireAuth = (req,res,next)=>{
if(!req.signedCookies.accId){
    res.redirect('/auth/login');
    return;
}
var acc = Account.find({id: req.signedCookies.accId});
if(!acc){
    res.redirect('/auth/login');
    return;
}
  res.locals.acc  = acc;
  next();
}