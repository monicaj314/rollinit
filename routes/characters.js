


var currentUser = {};

var express = require('express');
var router = express.Router();

var Character = require('../models/character');




// Add Character
router.post('/add', function(req,res){
    console.log('req.user');
    console.log(req.user);
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
        // res.render('register',{
        //     errors:errors
        // });
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
            if(err) throw err;
            console.log(character);
            // if (error) {
            //     console.log(error);
            //     }
            //     // Otherwise
            // else {
            //     // Use the article id to find and update it's note
            //     User.findOneAndUpdate({ "_id": req.params.id }, {$push: {"character": doc._id }})

            //     // Execute the above query
            //     .exec(function(err, doc) {
            //         // Log any errors
            //         if (err) {
            //         console.log(err);
            //         }
            //         else {
            //         // Or send the document to the browser
            //         res.send(doc);
            //         res.redirect('/char');
            //         }
            //     });
            // }
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/char');
    }
});



module.exports = router;
