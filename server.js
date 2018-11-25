var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var PORT = 3000;
var db = require("./models");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/SaferNeighbourhoods");

// db.ISO.create({ 
//     owner: "Trika Mitra",
//     item: "A puppy",
//     photoURL: "picture of a puppy",
//     ISO: true
// })
//   .then(function(dbISO) {
//     console.log(dbISO);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

// Routes

// POST route for saving a new Book to the db and associating it with a Library
app.post("/submit", function(req, res) {
  db.Assets.create(req.body)
    .then(function(dbAssets) {
      res.json(dbAssets);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Route for getting all books from the db
app.get("/ISO", function(req, res) {
  db.ISO.find({})
    .then(function(dbISO) {
      res.json(dbISO);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Route for getting all libraries from the db
app.get("/Assets", function(req, res) {
  db.Assets.find({})
    .then(function(dbAssets) {
      res.json(dbAssets);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
