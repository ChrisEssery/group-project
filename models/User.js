const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
  _id: Schema.Types.ObjectId,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  name: {type: String},
  surname: {type:String},
  age: {type: Number},
  gender: {type: String},
  location: {type: String},
  gameinstance: {type: int},
  friendarray [friend: String, online: Boolean]
});

module.exports = mongoose.model('User', User);


