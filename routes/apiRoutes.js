// const axios = require("axios");
const router = require("express").Router();

//require the controller
const recipeController = require("../controllers/recipeController.js");

// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     // .get("http://addb.absolutdrinks.com/drinks/absolut-cosmopolitan/?apiKey=de7934f82114431d8c7a617a36bb36de", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
//     console.log(req.query);
// });

//routes go here
module.exports = router
.get("/recipeAll", recipeController.findAll)
.get("/recipeByName/:name", recipeController.findRByName)

// router.route("/")
//   .get(recipeController.findAll);
//   // .post(recipeController.create);

// router.route("/:id")
//   .get(recipeController.findByName);
//   // .put(recipeController.update)
//   // .delete(recipeController.remove);

//   module.export = router;