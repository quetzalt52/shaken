// Require mongoose
//foo
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
var IngredientSchema = new Schema({
  // title is a required string
  ingredientname: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit"
  }
});

// Create the Article model with the ArticleSchema
var Ingredient = mongoose.model("Ingredient", IngredientSchema);

// Export the model
module.exports = Ingredient;
