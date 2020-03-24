var express = require('express')
var router = express.Router()
const shortid = require('shortid')
const db = require('../db')

//get and show users
router.get('/', (req,res) =>res.render('users/index',{
    users: db.get('users').value()
}));
router.get('/create',(req,res)=>res.render('users/create'));
//search user matched chars
router.get('/search',(req,res)=>{
    var q = req.query.q; //what
    users = db.get('users').value();
    var matchedUsers = users.filter(user => user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 );
    res.render('users/index',{users: matchedUsers});
}); 
//get id and render from db for view
router.get('/view:id',(req,res)=>{
    var id = req.params.id;
    var user = db.get('users').find({ id: id}).value();
    res.render('users/view',{ user: user})
});

//create users
router.post('/create',(req,res)=>{
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write(); 
     res.redirect('/users');
});








module.exports = router