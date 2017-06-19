


var currentUser = {};

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/rollinit');
var db = mongoose.connection;

var Character = require('../models/character');
var User = require('../models/user');


router.get('/all', function (req, res) {
    //UserModel.findOne({_id: id}, function (err, user) { ... });
    User.find({}).populate("characters")
    .exec(function (error, doc) {
        // Send any errors to the browser
        if (error) {
            res.send(error);
        }
        // Or send the doc to the articles in handlebars
        else {
            res.send(doc);
        }
    })
});
    


// Add Character
router.post('/add', function(req,res){
    console.log('req.user');
    console.log(req.user);
    var userID = req.user._id;
    console.log("userID1");
    console.log(userID);
    var name = req.body.name;
    var age = req.body.age;
    var gender = req.body.gender;
    var race = req.body.race;
    var level = req.body.level;

    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('age', 'Age is required').notEmpty();
    req.checkBody('gender', 'Gender is required').notEmpty();
    req.checkBody('race', 'Race is required').notEmpty();
    req.checkBody('level', 'Level is required').notEmpty();

    var errors = req.validationErrors();
    if(errors){
        console.log('yes errors')
        console.log(errors);
        for (i=0; i < errors.length; i++){
            console.log(errors[i].msg);
        }
    } else {
        var newCharacter = new Character({
            name: name, 
            age: age, 
            gender: gender,
            race: race,
            level: level
        });

        Character.createCharacter(newCharacter, function(err, character){
            console.log("character");
            console.log(character);
            if (err) {
                console.log(err);
                }
                // Otherwise
            else {
                console.log("userID2");
                console.log(userID);
                User.findOneAndUpdate({ "_id": userID }, {$push: {"characters": character}})
                // Execute the above query
                .exec(function(err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        //res.send(doc);
                        //res.redirect('/char');
                    }
                });
            }
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/char');
    }
});



module.exports = router;
