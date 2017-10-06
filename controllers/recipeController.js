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
  },
  findRByName: function(req, res) {
    console.log(req.params.name);
    db
      .find({name: req.params.name}).then(function(data){
        res.json(data);
      })
      .catch(err => res.status(422).json(err));
      //   if (err) return err;
      //   // console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<', recipe);
      //   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', recipe.toJSON());
      //   return res.end(recipe.toJSON());
      // })
      // // .then(function(recipe) {
      // //   // console.log('findRByName', req);
      // //   console.log(recipe.toJSON());
      // //   return res.end(recipe.toJSON());
      // // })
  }
};