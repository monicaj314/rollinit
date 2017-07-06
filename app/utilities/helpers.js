// Include the axios package for performing HTTP requests (promise based alternative to request)
//var axios = require("axios"); 
//var path = require("path");     

// Helper functions for making API Calls
var helpers = {

  // // This function hits our own server to retrieve the record of query results
  // getTournaments: function() {
  //   console.log("helpers.getTournament Activated")
  //   return axios.get("/tournaments/all");
  // },


  // checkUser: function(){
  //   console.log("helpers.checkUser Activated");
  //   return path.get("/characters/all");
  // }
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
