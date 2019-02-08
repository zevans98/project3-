const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: String,
    sprite: String,
    type: String
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
