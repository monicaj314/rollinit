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
    if(req.user){
      console.log("yes user")
      console.log(req.user)
      res.sendFile(path.join(__dirname+ "./../assets/html/index.html"))
    } else {
      console.log("no user")
      res.sendFile(path.join(__dirname+ "./../assets/html/index.html"))
    }
  
  });

   app.get("/char", function(req, res){
     if(req.user){
        console.log("yes user")
        console.log(req.user)
        res.sendFile(path.join(__dirname + "./../assets/html/char.html"))
      } else {
        console.log("no user")
        res.sendFile(path.join(__dirname + "./../assets/html/char.html"))
      }
   });

   app.get("/login", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/login.html"))
   });

   app.get("/register", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/register.html"))
   });

  //  app.get("/logout", function(req, res){
  //    res.sendFile(path.join(__dirname + "./../assets/html/logout.html"))
  //  });

   app.get("/profile", function(req, res){
     res.sendFile(path.join(__dirname + "./../assets/html/profile.html"))
   });


};