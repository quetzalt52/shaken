const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const compression = require('compression');
const helmet = require('helmet');

const Index = require("./models/Index.js");
//create instance of express
const app = express();
app.use(helmet());
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/apiRoutes");
// const routes = require("./routes/apiRoutes");

const mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Database configuration with mongoose
// mongoose.connect("mongodb://localhost/recipelist");
mongoose.connect(
  "mongodb://localhost/recipelist",
  {
    useMongoClient: true
  }
);
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Serve up static assets
app.use(express.static("client/build"));

app.use(logger("dev"));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(expressValidator() ); // Add this after the bodyParser middleware!
app.use(cookieParser());
// app.use(compression()); //Compress all routes

// Use apiRoutes
// app.use("/", apiRoutes);
app.use(apiRoutes);
app.get('/api/test', function(req, res) {
  res.json({'hey': 'hey'});
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  if(process.env.NODE_ENV === "production"){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }else{
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  }
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
