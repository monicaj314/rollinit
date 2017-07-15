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


var users = require('./routes/users');
var characters = require('./routes/characters');

// Initialize Express
var app = express();


// BodyParser and Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());



// Make public a static dir
app.use(express.static(path.join(__dirname, 'assets')));


// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport Init
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


var users = require('./routes/users');
var characters = require('./routes/characters');
app.use('/characters', characters);
app.use('/users', users);
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);




// =========  Database configuration with mongoose ===============
var localMongo = "mongodb://localhost/rollinit";
var MONGODB_URI = "mongodb://<dbuser>:<dbpassword>@ds153392.mlab.com:53392/heroku_pq8mzfbr";

if (process.env.MONGODB_URI){
    // this executes if this is being executed in heroku app
    mongoose.connect(process.env.MONGODB_URI);
} else {
   /// this executes if this is being executed on local machine
    mongoose.connect(localMongo);
}

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Moongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});




// Set Port
var PORT = process.env.PORT || 8880;
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
