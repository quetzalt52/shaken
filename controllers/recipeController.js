//require the models
const db = require("../models/Recipe");
//export an object with key/value pairs of all the mongoose queries inside
//call-back functions
module.exports = {
  findAll: function(req, res) {

    db
        .find({})
        // .then(dbModel => res.json(dbModel))
        .then(function(data) {
          console.log('TEST', data); //look for syntx for find
          return res.json(data)
        })
        .catch(err => res.status(422).json(err));
    console.log(req.body);
  },
  findByName: function(req, res) {
    db
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  // updateBand: function(req, res) {
  //   db
  //     .findOneAndUpdate({
  //       _id: req.params.id
  //     }, req.body)
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db
      .findById({
        _id: req.params.id
      })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
