import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";
import Video from "../components/Video";


class Search extends Component {
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

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getRecipe(this.state.recipeSearch)
  //     .then(res => this.setState({ 
  //       recipes: res.data }))
  //     .catch(err => console.log(err));
  // };

  componentDidMount(){
    console.log("update working");
    API.getRecipe()
        .then(res => this.setState({
            recipes: res.data
        }))
        // console.log(res.data)
        .catch(err => console.log(err));
        // console.log(this.state);

    // API.getDogs()
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

          <Jumbotron />
            <Container>
              <Row>
                <Col size="md-12">
                  <form>
                    <Container>
                      <Row>
                      <h1 className="text-center">Cocktail Search Engine</h1>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="recipeSearch"
                            value={this.state.recipeSearch}
                            onChange={this.handleInputChange}
                            placeholder="Search For a Cocktail Drink"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.handleFormSubmit}
                            type="warning"
                            className="input-lg"
                          >
                            Search
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </form>
                </Col>
              </Row>
              <Row>
                <Col size="xs-12">
                  {!this.state.recipes.length ? (
                    <h1 className="text-center">No Recipes to Display</h1>
                  ) : (
                    <RecipeList>
                      {this.state.recipes.map(recipe => {
                        return (
                          <RecipeListItem
                            key={recipe.name}
                            title={recipe.name}
                            href={recipe.videos[0].video}
                            ingredients={recipe.ingredients} ///loop through the array here
                        
                          />
                        );
                      })}
                    </RecipeList>
                  )}
                </Col>
              </Row>
        </Container>
      </div>
    );
  }
}
export default Search;
