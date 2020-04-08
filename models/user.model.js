var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
     email: 'string',
     name: 'string',
     phone:'string',
     avatar: 'string' 
});
var User = mongoose.model('User', userSchema,'users');

module.exports = User;