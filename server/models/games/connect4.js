var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Connect4 = new Schema({
    player1: {type: String, required: true},//player1's username
    player2: {type: String, required: true},//player2's username
    date: {type: Date, default: Date.now},
    winner: {type: String} //winner's username
  });
  
  module.exports = mongoose.model('Connect4', Connect4);