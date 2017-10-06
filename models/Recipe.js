/ Require mongoose
//foo
const mongoose = require("mongoose");
// Create Schema class
const Schema = mongoose.Schema;

// Create article schema
// var ArticleSchema = new Schema({
const RecipeSchema = new Schema({
  description: {
    type: String,
    required: false
  },
  videos :
      {
          video : {
            type: [String],
            required: false
          },
          type : {
            type: [String],
            required: false
          }
      },
  ingredients :
      {
          type : {
            type: [String],
            required: false
          },
          id : {
            type: [String],
            required: false
          },
          text : {
            type: [String],
            required: false
          },
          textPlain : {
            type: [String],
            required: false
          }
      },
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  descriptionPlain: {
    type: String,
    required: true
  }//,
  // This only saves one note's ObjectId, ref refers to the Note model
  // for one-to-many, change this to an array
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // }
});

// Create the Article model with the ArticleSchema
const Recipe = mongoose.model("Recipe", RecipeSchema);

// Export the model
module.exports = Recipe;