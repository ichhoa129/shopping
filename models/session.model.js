var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema(
  {
    id: 'string',
    cart: {
        productId:'string',
        cartNum: 'number'
        } 
  });

var Session = mongoose.model('Session', sessionSchema,'sessions');

module.exports = Session;