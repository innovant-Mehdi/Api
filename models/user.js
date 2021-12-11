const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("user", userSchema);
