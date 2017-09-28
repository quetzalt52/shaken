const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    // .get("http://addb.absolutdrinks.com/drinks/absolut-cosmopolitan/?apiKey=de7934f82114431d8c7a617a36bb36de", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
    console.log(req);
});

module.exports = router;
