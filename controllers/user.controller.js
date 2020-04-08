const express = require("express");
var User = require('../models/user.model');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


module.exports.index = async (req, res) => {
  var user = await User.find(); 
  res.render("users/index", {
    users: user
  });
};
module.exports.create = (req, res) => res.render("users/create");
module.exports.search = (req, res) => {
  var name = req.query.name;
    User.find().then((users)=>{
      var matchedUsers = users.filter(user => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
      res.render("users/index", { users: matchedUsers });
    });
};
module.exports.viewId = async (req, res) => {
  var id = req.params.id;
  var user = await User.find({_id:id});
  console.log(user)
  res.render("users/view", { user: user[0] });
};
// set users to database
module.exports.postCreate =(req, res) => {
      req.body.avatar = 'uploads/'+req.file.filename;
      User.create(req.body);  
      res.redirect("/users");
    };
