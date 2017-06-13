var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/quidapp');
var db = mongoose.connection;


//var logger = require("morgan");
//var Player = require("./models/Player.js");
//var Tournament = require("./models/Tournament.js");

//var routes = require('./routes/index.js');
//var users = require('./routes/users');

// var request = require('request');

// Initialize Express
var app = express();

// view engine for HANDLEBARS
// app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
// app.set('view engine', 'handlebars');


// BodyParser and Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());


// ============== This is if you use Morgan ================
// // Use morgan and body parser with our app
// //app.use(logger("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// Make public a static dir
app.use(express.static(path.join(__dirname, 'assets')));


// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash Middleware
app.use(flash());

app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


// app.use('/', routes);
//app.use('/users', users);

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);


// =========  Database configuration with mongoose ===============
// ---------  define local MongoDB URI ----------


var localMongo = "mongodb://localhost/DDrepo"
//var MONGODB_URI = "mongodb://<dbuser>:<dbpassword>@ds125481.mlab.com:25481/heroku_0p3792pt"

if (process.env.MONGODB_URI){
    // this executes if this is being executed in heroku app
    mongoose.connect(process.env.MONGODB_URI);
} else {
    // this ececutes if this is being executed on local machine
    mongoose.connect(localMongo);
}


// // =========  End databse configuration  ================

// var db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });



var PORT = process.env.PORT || 8888;
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
