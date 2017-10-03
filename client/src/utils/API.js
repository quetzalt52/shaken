import axios from "axios";
//
// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("/api/recipes", { params: { q: query}});
  }
};
// Include the Axios library for HTTP requests
// var axios = require("axios");
// NYT API Key (Replace with your own API Key)
// var APIKey = "de7934f82114431d8c7a617a36bb36de";
