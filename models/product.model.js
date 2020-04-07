var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
     Name: 'string',
     Image:'string',
     Description: 'string' 
});

var Product = mongoose.model('Product', productSchema,'products');

module.exports = Product;