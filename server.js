const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//const logger = require("morgan");
const mongoose = require("mongoose");
const Index = require("./models/Index.js");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/recipelist");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
  //foo
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//create instance of express
const app = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/apiRoutes");

// Serve up static assets
app.use(express.static("client/build"));


//app.use(logger("dev"));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
// Use apiRoutes
app.use("/api", apiRoutes);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(routes);


// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
