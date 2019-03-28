import React from 'react';
import './css/SingleRecipe.css';
import RecipeItem from '../parts/RecipeItem';
import IngredientsList from '../parts/IngredientsList';
import NutritionFactsContainer from '../parts/NutritionFactsContainer';
import SearchRecipe from '../parts/SearchRecipe';
import {Link} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
			currentRecipe: {},
			redirectToFavourite: false,
    };
  }

  // function that retrieves a recipe, given its id
  retrieveRecipe(recipeId) {
    const requestURL = 'http://api.yummly.com/v1/api/recipe/'+recipeId+'?_app_id='+process.env.REACT_APP_YUMMLY_APP_ID+'&_app_key='+process.env.REACT_APP_YUMMLY_API_KEY;

    fetch(requestURL)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          // isLoaded: true,
          currentRecipe: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          // isLoaded: true,
          error
        });
      }
    )
  };

	// if user clicked on Favourite button
	redirectToSearch(){
		this.setState(
			{redirectToFavourite: true}
		);
	}

  componentDidMount() {
 		this.retrieveRecipe(this.props.match.params.recipeId)
  }

  render() {

		if (this.state.redirectToFavourite) {
			return <Link to={'/contact'} />
		}

    if(!this.state.currentRecipe.images){
      return null
    } else {
      console.log(this.state.currentRecipe)
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
      return (
        <div className="App">
          <RecipeItem recipe={this.state.currentRecipe}/>
					<hr className="horizontal-separator"/>
          <IngredientsList recipe={this.state.currentRecipe}/>
					<hr className="horizontal-separator"/>
          <NutritionFactsContainer recipe={this.state.currentRecipe}/>
					<div className="favourite-div"><button className="favourite-button button-green" onClick={()=>{this.redirectToSearch()}}>Add to Favourites</button></div>
					<SearchRecipe
						title = "Related Recipes"
						isGrouped = {false} //indicates if this section belongs to the same team of other elements on the page
						ingredient = {this.props.match.params.searchIngredient}
						nutrientConstraints = {this.props.match.params.nutrientConstraints}
						retrieveRecipe={this.retrieveRecipe.bind(this)}
						
					/>
				</div>       
      );
    }

  }
}

export default App;
