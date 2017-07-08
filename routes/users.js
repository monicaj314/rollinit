<<<<<<< HEAD



=======
>>>>>>> c55d461bf41c95eea8632044b66a8438c4d79904
var currentUser = {};

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
// Get Register
router.get('/register', function(req,res){
    res.render('register');
});

// Get Login
router.get('/login', function(req,res){
    res.render('login');
});

// Register User
router.post('/register', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    // var dm = req.body.dm;

    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors){
        // res.render('register',{
        //     errors:errors
        // });
        console.log('yes errors')
        console.log(errors);
        for (i=0; i < errors.length; i++){
            console.log(errors[i].msg);
        }
    } else {
        var newUser = new User({
            name: name, 
            email: email, 
            username: username,
            password: password,
            profile: {}
            // dm: dm
        });

        User.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user);
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/login');
    }
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
            console.log("Not a user"); 
            //return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                return done(null, user);
            } else {
                console.log("Not the right password.")
                //return done(null, false, {message: 'Invalid password.'});
            }
        });
    });
  }
));

// ============ This is the basic from Passport ============
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});


router.post('/login',
<<<<<<< HEAD
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/login',failureFlash: true}),
=======
  passport.authenticate('local', {successRedirect: '/profile', failureRedirect: '/login',failureFlash: true}),
>>>>>>> c55d461bf41c95eea8632044b66a8438c4d79904
  function(req, res) {
    // console.log("router.post/login")
    
    // localStorage.setItem('currentUser', req.user.username);
    // var currentUser = localStorage.getItem('currentUser');
    // console.log("localStorage username");
    // console.log(currentUser);

<<<<<<< HEAD
    res.redirect('/');
=======
    res.redirect('/profile');
>>>>>>> c55d461bf41c95eea8632044b66a8438c4d79904
  });

router.get('/logout', function(req, res){
    console.log("/users/logout has been clicked")
    req.logout();
    req.flash('success_msg', 'You are logged out. Come again soon!')
<<<<<<< HEAD
    res.redirect('/login');
=======
    res.redirect('/');
>>>>>>> c55d461bf41c95eea8632044b66a8438c4d79904
})

module.exports = router;
