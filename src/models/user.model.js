const mongoose = require("mongoose");
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    created_date: { type: Date, default: Date.now },
  })
);
module.exports = User;
