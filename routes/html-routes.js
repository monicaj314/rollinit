// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/rollinit');
var db = mongoose.connection;

var Character = require('../models/character');
var User = require('../models/user');
var Races = require("./../assets/js/racesCollections/racesCollections.js")

// Routes
// =============================================================
module.exports = function (app) {

app.get("/", function(req, res){
    if(req.user){
      console.log("yes user")
      console.log(req.user)
      res.sendFile(path.join(__dirname+ "./../assets/html/index.html"));
    } else {
      console.log("no user");
      res.sendFile(path.join(__dirname+ "./../assets/html/index.html"))
    }
  });

app.get("/char", function(req, res){
  if(req.user){
      User.find({}).populate("characters")
        .exec(function (error, doc) {
          if (error) {
              res.send(error);
            } else {
              console.log("doc")
              console.log(doc)
              res.sendFile(path.join(__dirname + "./../assets/html/char.html"))
          }
        })
      } else {
        console.log("no user")
        res.sendFile(path.join(__dirname + "./../assets/html/login.html"))
      }
   });

      app.get("/profile", function(req, res){
     if(req.user){
        User.find({}).populate("characters")
          .exec(function (error, doc) {
            if (error) {
              res.send(error);
            } else {
              console.log("doc")
              console.log(doc)
              res.sendFile(path.join(__dirname + "./../assets/html/profile.html"))
          }
        })
      } else {
        console.log("no user")
        res.sendFile(path.join(__dirname + "./../assets/html/login.html"))
      }
   });

   app.get("/login", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/login.html"))
   });

   app.get("/apiRace", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/js/racesCollections/racesCollections.js"))
   });

   app.get("/apiRace/:Races?", function(req, res) {
  var chosen = req.params.Races;

  if (chosen) {
    console.log(chosen);
    for (var i = 0; i < Races.length; i++) {
      if (chosen === Races[i].name) {
        return res.json(Races[i]);
      }
    }
    return res.json(false);
  }
  return res.json(Races);
});

   app.get("/apiClass", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiClass.html"))
   });

   app.get("/apiEquipment", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiEquipment.html"))
   });

   app.get("/apiSpells", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiSpells.html"))
   });

   app.get("/apiBackground", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiBackground.html"))
   });

   app.get("/register", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/register.html"))
   });

   app.get("/profile", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/profile.html"))
   });
};
