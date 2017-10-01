  // Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
var UserSchema = new Schema({
  // title is a required string
  userid: {
    type: String,
    required: true
  },
  // link is a required string
  usernname: {
    type: String,
    required: true
  },
  userimage: {
    type: String,
    required: false
  },
  useremail: {
    type: String,
    required: true
  },
  lastlogin: {
    type : Date,
    default : Date.now
  }
});

// Create the Article model with the ArticleSchema
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;
