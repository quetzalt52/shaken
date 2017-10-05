//require the models
const db = require("../models/Recipe");
//export an object with key/value pairs of all the mongoose queries inside
//call-back functions
module.exports = {
  findAll: function(req, res) {
    // console.log("reached back end");
    db
        .find({})
        //   if(err){
        //     console.log(err);
        //   }else if(data){
        //     console.log("data",data);
        //   }

        // })
        .then(data => res.json(data))
        // .then(res => console.log(res))
        .catch(err => res.status(422).json(err));
    // console.log(req.body);
  },
  findByName: function(req, res) {
    db
      .findById(req.params.id)
      // .then(data => res.json(data))
      .then(function(data) {
        console.log('findByName', req);
        return res.json(data);
      })
      .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db
  //     .create(req.body)
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  // },
  // // updateBand: function(req, res) {
  // //   db
  // //     .findOneAndUpdate({
  // //       _id: req.params.id
  // //     }, req.body)
  // //     .then(data => res.json(data))
  // //     .catch(err => res.status(422).json(err));
  // // },
  // remove: function(req, res) {
  //   db
  //     .findById({
  //       _id: req.params.id
  //     })
  //     .then(data => data.remove())
  //     .then(data => res.json(data))
  //     .catch(err => res.status(422).json(err));
  }
};
