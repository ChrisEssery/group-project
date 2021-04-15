const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  name: {type: String},
  surname: {type:String},
  age: {type: Number},
  gender: {type: String},
  location: {type: String},
  wins: {type: Number},
  // friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
  friends: [{type: String, unique: true}], //referring to the username of a friend
  gamesinstance: [{type: Schema.Types.ObjectId, ref: 'GameInstance'}]
});

module.exports = mongoose.model('User', User);