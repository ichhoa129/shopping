const db = require("../db");

module.exports.product= (req,res)=>{
    var page = parseInt(req.query.page) || 1;
    var start = (page-1)*8;
    var end = page*8;
    var productPage = db.get('products').value().slice(start,end);
    res.render('product/index',{
     products: productPage,
     pageNum: page,
     pageNumb:page-1,
     pageNuma:page+1 
    });
};