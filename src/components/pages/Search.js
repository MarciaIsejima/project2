import React, { Component } from "react";
import './Search.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import SearchRecipe from "./components/SearchRecipe";
import {Redirect} from "react-router-dom";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchIngredient: '',
			selectedRecipeId: ''
    };
  }

  handleChange(event) {
    this.setState({
      searchIngredient: event.target.value,
    });
  }

  handleSubmit(event) {
		event.preventDefault();
  };

	// if user selected a recipe from the recipe list
	retrieveRecipe(id){
		if (id!==''){
			this.setState(
				{selectedRecipeId: id}
			);
		}

	}

  render() {

		if (this.state.selectedRecipeId!=='') {

			return <Redirect to={{pathname:'/recipe/single/'+ this.state.selectedRecipeId }} />
		}

    return (
      <div>
				<form onSubmit={this.handleSubmit}>
					<div className="search-form-div">
						<div className="heading-2">Search Recipes</div>
						<div className="search-field-container">
							<Icon path={mdiMagnify} size={1.5} rotate={90} color={"grey"}/>
							<input
								className="search-input"
								id = "ingredient" 
								name="currentIngredient"
								type="text"
								placeholder="Enter ingredient"
								onChange={this.handleChange}/>
						</div>
						<div className="input-field col s2">
							<button className="button-orange"
									type="submit" name="action">Search</button>
						</div>
					</div>
				</form>
        <SearchRecipe
          title = {(this.state.searchIgredient==='')? "Popular Recipes" : "Recommended Recipes"}
          ingredient = {this.state.searchIngredient}
					retrieveRecipe={this.retrieveRecipe.bind(this)}
        />
      </div>
    );
  }
}
 
export default Search;