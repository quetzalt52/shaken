// import axios from "axios";
// // Include the Axios library for HTTP requests

// const BaseURL ="http://addb.absolutdrinks.com/drinks/";
// //  API Key
// const APIKey = "de7934f82114431d8c7a617a36bb36de";


// // // The getRecipes method retrieves recipes from the server
// // // It accepts a "query" or term to search the recipe api for
// export default {
//   getRecipes: function(query) {
//     return axios.get(BaseURL+query+"/?apiKey="+APIKey);
//     //http://addb.absolutdrinks.com/drinks/blue-moon/?apiKey=de7934f82114431d8c7a617a36bb36de
//   }
// };

import axios from 'axios';

export default {
  //front end routes go here
  getRecipe: function() {
    // console.log(testapijs);
    return axios.get("/recipeAll");
  },
  // postRecipeData: function(){
  //   return axios.post("/addBand");
  // },
  getOneRecipe: function(recipe_id){
    // console.log("this is the bands real id: ", band_id);
    return axios.get("/recipeName/" + recipe_id);
  },
  getDogs: function(){
    return axios.get("https://dog.ceo/api/breeds/list/all")
  }
};
