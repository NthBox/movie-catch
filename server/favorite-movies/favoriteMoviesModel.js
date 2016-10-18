var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
  saved: []
});

module.exports = mongoose.model('Favorite', FavoriteSchema);