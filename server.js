const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//const logger = require("morgan");
const mongoose = require("mongoose");


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



// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
