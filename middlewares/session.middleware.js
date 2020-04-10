const shortid = require("shortid");
var Session = require('../models/session.model');


module.exports = (req,res,next)=>{
    if(!req.signedCookies.sessionId)
      {     
          var sessionId = shortid.generate()
          res.cookie('sessionId',sessionId,{
              signed: true 
          });   
          Session.create({id:sessionId}).catch((err)=>console.log(err.message));    
      }
      next();
}