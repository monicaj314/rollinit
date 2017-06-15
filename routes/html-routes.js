// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html


  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+ "./../assets/html/index.html"))
  });

   app.get("/char", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/char.html"))
   });

   app.get("/login", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/login.html"))
   });

   app.get("/register", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/register.html"))
   });

   app.get("/logout", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/logout.html"))
   });


};