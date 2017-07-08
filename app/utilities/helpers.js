// Include the axios package for performing HTTP requests (promise based alternative to request
var axios = require("axios"); 
//var path = require("path");     

// Helper functions for making API Calls
var helpers = {

  // This function hits our own server to retrieve the record of query results
  getCharacters: function() {
    console.log("helpers.getCharacters Activated")
    return axios.get("/characters/all");
  },


  // checkUser: function(){
  //   console.log("helpers.checkUser Activated");
  //   return path.get("/characters/all");
  // }

  logIn: function(username, password){
    console.log("helpers.logIn Activated");
    console.log("helpers.logIn username")
    console.log(username)
    console.log("helpers.logIn password")
    console.log(password)
    return axios.post("/users/login")
  },

  register: function(name, username, email, password, password2){

    console.log("helpers.register Activated");
    console.log("helpers.register name")
    console.log(name)
    console.log("helpers.register username")
    console.log(username)
    console.log("helpers.register password")
    console.log(password)
    console.log("helpers.register password2")
    console.log(password2)
    return axios.post("/users/register")
  }
//   router.get('/user', function (req, res) {
//     console.log("req.user")
//     console.log(req.user)
//     User.findOne({_id: req.user._id}).populate("tournaments")
//     .exec(function (error, doc) {
//         // Send any errors to the browser
//         if (error) {
//             res.send(error);
//         }
//         // Or send the doc to the articles in handlebars
//         else {
//             res.send(doc);
//         }
//     })
// });


};

// We export the API helper
module.exports = helpers;
