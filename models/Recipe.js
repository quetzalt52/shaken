// Require mongoose
//foo
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
var RecipeSchema = new Schema({
  // title is a required string
  recipename: {
    type: String,
    required: true
  },
  // link is a required string
  instruction: {
    type: String,
    required: true
  },
  ytvideo: {
    type: String,
    required: false
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  ingredient: {
    type: Schema.Types.ObjectId,
    ref: "Ingredient"
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

// Create the Article model with the ArticleSchema
var Recipe = mongoose.model("Recipe", RecipeSchema);

// Export the model
module.exports = Recipe;
