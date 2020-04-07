const Product = require('../models/product.model');
module.exports.product= async (req,res)=>{
    // var page = parseInt(req.query.page) || 1;
    // var start = (page-1)*8;
    // var end = page*8;
    // var productPage = db.get('products').value().slice(start,end);

    // var sessionId = req.signedCookies.sessionId;
    // var data = db.get('sessions').find({id: sessionId}).value();
    // var sum=0;
    // if(data.cart){
    // sum = Object.values(data.cart).reduce((acc,cur)=>acc+parseInt(cur));
    // }
     

    // res.render('product/index',{
    //  products: productPage,
    //  pageNum: page,
    //  pageNumb:page-1,
    //  pageNuma:page+1,
    //  sum: sum
    // });
    var products = await Product.find();
    res.render('product/index',{
         products: products
    });
    
};