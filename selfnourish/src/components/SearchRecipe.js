import React, { Component } from "react";
import './SearchRecipe.css';
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";

class SearchRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchIngredient: '',
      doSearch: false
    };
  }



  handleChange(event) {

    const value = event.target.value;

    this.setState({
      searchIngredient: value,
      doSearch: false
    });

  }

  handleSubmit() {
       
    this.setState({
      doSearch: true
    });

  };

  render() {

    return (
      <div>
        <SearchForm
          currentDetails={this.state.searchIngredient}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <RecipeList
          title = {(this.state.searchIgredient==='')? "Popular Recipes" : "Recommended Recipes"}
          ingredient = {this.state.searchIngredient}
          doSearch = {this.state.doSearch}
        />
      </div>
    );
  }
}
 
export default SearchRecipe;