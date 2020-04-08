var db = require('../db');
var Session = require('../models/session.model');

module.exports.addToCart = (req,res,next)=>{
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/products');
        return;
    }
    // var count = db
    // .get('sessions')
    // .find({id: sessionId})
    // .get('cart.' + productId,0)
    // .value();
    Session.find({id:sessionId})
    .then((id)=>{
        console.log(id);
    });
   

    res.redirect('/products');
};