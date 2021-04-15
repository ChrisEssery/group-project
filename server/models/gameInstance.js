var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameInstance = new Schema({
  gameName: {type: String},
  player1: {type: Schema.Types.ObjectId, ref: 'User'},
  player2: {type: Schema.Types.ObjectId, ref: 'User'},
  date: {type: Date, default: Date.now},
  winner: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('GameInstance', GameInstance);
