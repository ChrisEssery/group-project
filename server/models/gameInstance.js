var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameInstance = new Schema({
  gameName: {type: String},
  player1: {type: String, unique: true},//refering the the username
  player2: {type: String, unique: true},//refering the the username
  date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('GameInstance', GameInstance);
