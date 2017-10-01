// Require mongoose
//foo
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
var UnitSchema = new Schema({
  // title is a required string
  amount: {
    type: Number,
    required: true
  },
  // link is a required string
  unit: {
    type: String,
    required: true
  }
});

// Create the Article model with the ArticleSchema
var Unit = mongoose.model("Unit", UnitSchema);

// Export the model
module.exports = Unit;
