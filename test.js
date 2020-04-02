var db = require('./db');

var data = db.get('sessions').find({id: '1hVR84qGv'}).value();
console.log(data);
var numOfCart = Object.values(data.cart);

var sum = numOfCart.reduce((acc,cur)=>acc+parseInt(cur));
console.log(sum);