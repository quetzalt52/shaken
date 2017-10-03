import axios from "axios";
// Include the Axios library for HTTP requests

const BaseURL ="http://addb.absolutdrinks.com/drinks/pennsylvania/?";
//  API Key
const APIKey = "de7934f82114431d8c7a617a36bb36de";


// // The getRecipes method retrieves recipes from the server
// // It accepts a "query" or term to search the recipe api for
export default {
  getRecipes: function(query) {
    return axios.get("/api/recipes",BaseURL+query+APIKey);
  }
};
