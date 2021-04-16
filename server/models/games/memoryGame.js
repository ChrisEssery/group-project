var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemoryGame = new Schema({
    player1: {type: String, required: true},//player1's username
    player2: {type: String, required: true},//player2's username
    date: {type: Date, default: Date.now},
    difficultyLevel: {type: String},
    result: {
        winners: [{type: String}],
        score: {type: Number},
    }
  });
  
  module.exports = mongoose.model('MemoryGame', MemoryGame);