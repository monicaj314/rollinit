

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/rollinit');
var db = mongoose.connection;

var CharacterSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number, 
    },
    gender: {
        type: String,
    },
    race: {
        type: String,
    },
    level: {
        type: Number,
    //},
    // dm: {
    //     type: Boolean,
    }
});

var Character = module.exports = mongoose.model('Character', CharacterSchema);

module.exports.createCharacter = function(newCharacter, callback){
   newCharacter.save(callback);
}

module.exports.getCharacterByName = function(name, callback){
    var query = {name: name};
    Character.findOne(query, callback);
}

module.exports.getCharacterById = function(id, callback){
    Character.findById(id, callback);
}