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
var Races = require("./../assets/js/racesCollections/racesCollections.js");
var Backgrounds = require("./../assets/js/backgroundsCollections.js"); 
var Collections = require("./../assets/js/classCollections/classCollections.js");

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

     app.get("/apiClass/:Collections?", function(req, res){
     var selected = req.params.Collections;
if (selected){
  for (var chosen in Collections) {
        if (Collections.hasOwnProperty(selected)) { 
          selected = Collections[selected];
            return res.json(selected)
        }
     } return res.json(false);
}
return res.json(Collections)

   });



   app.get("/apiEquipment", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiEquipment.html"))
   });

   app.get("/apiSpells", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/htmlAPI/apiSpells.html"))
   });

   app.get("/apiBackground", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/js/backgroundsCollections.js"))
   });

   app.get("/apiBackground/:Backgrounds?", function(req, res) {
  var chosen = req.params.Backgrounds;
  var selected = Backgrounds[0][chosen];

  if (chosen) {
    for (selected in Backgrounds[0]) {
      if (Backgrounds[0].hasOwnProperty(selected)) {
        return res.json(Backgrounds[0][chosen]);
      }
    }
    return res.json(false);
  }
  return res.json(Backgrounds);
});


   app.get("/register", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/register.html"))
   });

   app.get("/profile", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/profile.html"))
   });
};
