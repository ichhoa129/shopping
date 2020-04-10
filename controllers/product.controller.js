const Product = require('../models/product.model');
const SessionId = require('../models/session.model');
module.exports.product= async (req,res)=>{
    var products = await Product.find();
    //render 8 products per page
    var page = parseInt(req.query.page) || 1;
    var start = (page-1)*8;
    var end = page*8;
    var productPage = products.slice(start,end);
    //add cart  
    var sessionId = req.signedCookies.sessionId;
    var data = await SessionId.findOne({id:sessionId});
    if(data.cart){
        var sum = data.cart.reduce((acc,cur) =>  acc+cur.amount,0);
        return res.render('product/index',
        {
          products: productPage,
          pageNum: page,
          pageNumb:page-1,
          pageNuma:page+1,
          sum: sum
         });
    } else{
        return res.render('product/index',
        {
            products: productPage,
             pageNum: page,
             pageNumb:page-1,
             pageNuma:page+1,
             sum: 0
         });
    }
  
};
module.exports.search = (req, res) => {
    var title = req.query.title;
      Product.find().then((products)=>{
        var matchedProducts = products.filter(product => product.Name.toLowerCase().indexOf(title.toLowerCase()) !== -1);
        
        // var page = parseInt(req.query.page) || 1;
        // var start = (page-1)*8;
        // var end = page*8;
        // var productPage = matchedProducts.slice(start,end);
       
        res.render("product/index", { products: matchedProducts});
      });
  };    
