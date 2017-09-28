var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MixologySchema = new Schema({
  title: {
    type: String
  }
});

var Mixology = mongoose.model("Mixology", MixologySchema);
module.exports = Mixology;
