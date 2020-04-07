const Transfer = require('../models/transfer.model');


module.exports.create = (req,res,next)=>{
 res.render('transfer/create',{
      csrfToken: req.csrfToken()
     });
};

module.exports.postCreate= (req,res,next)=> {
    var data = {
        id: shortid.generate(),
        amount: parseInt(req.body.amount),
        accountId: req.body.accountId,
        userId: req.signedCookies.accId
    }
    Transfer.update(data);
    res.redirect('create');
};