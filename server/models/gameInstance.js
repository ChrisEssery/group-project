var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameInstance = new Schema({
  gameName: {type: String},
  //refering the the username
  player1: {type: String, unique: true},
  player2: {type: String, unique: true},
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('GameInstance', GameInstance);
