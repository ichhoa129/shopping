var mongoose = require('mongoose');

var transferSchema = new mongoose.Schema({
     accountId: 'string',
     amount:'number'
     
});

var Transfer = mongoose.model('Transfer', transferSchema,'transfers');

module.exports = Transfer;