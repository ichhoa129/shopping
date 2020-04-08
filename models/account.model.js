var mongoose = require('mongoose');

var accountSchema = new mongoose.Schema({
     email: 'string',
     password:'string'   
});
var Account = mongoose.model('Account', accountSchema,'accounts');

module.exports = Account;