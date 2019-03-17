import React, { Component } from "react";
import './SearchRecipe.css';
import SearchForm from "./SearchForm";
import RecipeList from "./RecipeList";

class SearchRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchIgredient: '',
      doSearch: false
    };
  }


  handleChange(event) {

    const value = event.target.value;

    this.setState({
      searchIgredient: value,
      doSearch: false
    });
window.alert(this.state.searchIngredient)
  }

  handleSubmit(event) {
    window.alert(this.state.searchIngredient)
    this.setState({
      doSearch: true
    });

  };

  render() {
    return (
      <div>
        <SearchForm
          currentDetails={this.state.searchIgredient}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <RecipeList
          title = {(this.state.searchIgredient==='')? "Popular Recipes" : "Recommended Recipes"}
          ingredient = {this.state.searchIgredient}
          doSearch = {this.state.doSearch}
        />
      </div>
    );
  }
}
 
export default SearchRecipe;