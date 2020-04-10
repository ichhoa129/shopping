var Session = require('../models/session.model');

module.exports.addToCart = async (req,res,next)=>{
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId;

    if(!sessionId) {
        res.redirect('/products');
        return;
    }    
   var data = await Session.findOne({id:sessionId});

   var existedProductId = data.cart.find(proId => proId.productId === productId);

   if(existedProductId){
      existedProductId.amount+=1;
   } else {
    newObj = {productId: productId, amount: 1}
    data.cart.push(newObj);
   }
   
    data.save();

    res.redirect('/products');
};