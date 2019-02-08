const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: String,
  sprite: String,
  type: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    pokemon: [PokemonSchema]
});



module.exports = mongoose.model('User', UserSchema);
