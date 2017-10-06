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
    console.log("this is the recipe real id: ", recipe_id);
    return axios.get("/recipeName/" + recipe_id);
  },
  getRecipeByName: function(recipeSearch){
    console.log("this is the recipe name: ", recipeSearch);
    return axios.get("/recipeByName/" + recipeSearch);
  }
  // getDogs: function(){
  //   return axios.get("https://dog.ceo/api/breeds/list/all")
  // }
};
