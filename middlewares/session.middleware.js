const shortid = require("shortid");
var Session = require('../models/session.model');


module.exports = (req,res,next)=>{
    if(!req.signedCookies.sessionId)
      {
          var sessionId = shortid.generate()
          res.cookie('sessionId',sessionId,{
              signed: true 
          });   
          const mongoose = require('mongoose');
          mongoose.connect(process.env.MONGO_URL,
             { useNewUrlParser: true,
               useUnifiedTopology: true },(err,db)=>{
                 var newSession = db.collection('sessions');
                 newSession.insertOne({_id:sessionId});  
              });
      }
      next();
}