const express = require("express");
const db = require("../db");
const shortid = require("shortid");

module.exports.index = (req, res) => {
  res.render("users/index", {
    users: db.get("users").value()
  });
};
module.exports.create = (req, res) => res.render("users/create");
module.exports.search = (req, res) => {
  var name = req.query.name;
  var matchedUsers = db
    .get("users")
    .value()
    .filter(user => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  res.render("users/index", { users: matchedUsers });
};
module.exports.viewId = (req, res) => {
  var id = req.params.id;
  var user = db
    .get("users")
    .find({ id: id })
    .value();
  res.render("users/view", { user: user });
};
// set users to database
module.exports.postCreate = (req, res) => {
  req.body.id = shortid.generate();
  db.get("users")
    .push(req.body)
    .write();
  res.redirect("/users");
};
module.exports.postDel = (req,res)=>{
  var users = db.get('users').find
}