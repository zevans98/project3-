const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  count: {
    name: String,
    sprite: String,
    type: String
  }
});

module.exports = mongoose.model('pokemon', PokemonSchema);
