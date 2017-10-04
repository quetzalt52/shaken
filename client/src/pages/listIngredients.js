import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";
import IngredientPic from "../components/IngredientPic";


class ListIngredients extends Component {
    state = {
        recipes: [],
        recipeSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getRecipes(this.state.recipeSearch)
            .then(res => this.setState({ recipes: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return ( <
            div >

            
            <IngredientPic />
            <Container >
            <
            Row >
            <
            Col size = "md-12" >
            <
            form >
            <
            Container >
            <
            Row >
            <
            h1 className = "text-center" > Search by Ingredients < /h1> <
            Col size = "xs-9 sm-10" >
            <
            Input name = "recipeSearch"
            value = { this.state.recipeSearch } onChange = { this.handleInputChange } placeholder = "Search Ingredients for a cocktail Drink" /
            >
            <
            /Col> <
            Col size = "xs-3 sm-2" >
            <
            Button onClick = { this.handleFormSubmit } type = "warning"
            className = "input-lg" >
            Ingredients Search <
            /Button> <
            /Col> <
            /Row> <
            /Container> <
            /form> <
            /Col> <
            /Row> <
            Row >
            <
            Col size = "xs-12" > {!this.state.recipes.length ? ( <
                    h1 className = "text-center" > No Recipes to Display < /h1>
                ) : ( <
                    RecipeList > {
                        this.state.recipes.map(recipe => {
                            return ( <
                                RecipeListItem key = { recipe.title } title = { recipe.title } href = { recipe.href } ingredients = { recipe.ingredients } thumbnail = { recipe.thumbnail }
                                />
                            );
                        })
                    } <
                    /RecipeList>
                )
            } <
            /Col> <
            /Row> <
            /Container> <
            /div>
        );
    }
}
export default ListIngredients;
