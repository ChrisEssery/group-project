var mongoose = require('mongoose');
var GameInstance = mongoose.Schema;

var GameInstance = new Schema({
  _id: Schema.Types.ObjectId,
  player1: {type: String},
  player2: {type: String},
  timeStarted: {type: Date},
  timeFinished: {type: Date},
  winner: {type: String}
});

export.module = mongoose.model('GameInstance', GameInstance);
