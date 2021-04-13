var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Game = new Schema({
  _id: Schema.Types.ObjectId,
  gameName: {type: String},
});

export.module = mongoose.model('Game', Game);
