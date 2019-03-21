import React from 'react';
import './SingleRecipe.css';
import RecipeItem from './components/RecipeItem';
import IngredientsList from './components/IngredientsList';
import NutritionFactsContainer from './components/NutritionFactsContainer';
import RecipeList from './components/RecipeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
			currentCondition: {},
      currentRecipe: {}
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

  
  componentDidMount() {
    //this.retrieveRecipe("Sauteed-Zucchini-and-Cherry-Tomatoes-2198997")
    //this.retrieveRecipe("Asparagus-stir-fry-308736")
    //this.retrieveRecipe("Chickpea-Avocado-Salad-2071556")
    this.retrieveRecipe("Easy-BBQ-Tofu-440483")
  }

  render() {

    if(!this.state.currentRecipe.images){
      return null
    } else {
      console.log(this.state.currentRecipe)
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
      return (
        <div className="App">
          <RecipeItem recipe={this.state.currentRecipe}/>
          <IngredientsList recipe={this.state.currentRecipe}/>
          <NutritionFactsContainer recipe={this.state.currentRecipe}/>
          <RecipeList 
						title="Related Recipes"
						retrieveRecipe={this.retrieveRecipe.bind(this)}/>
        </div>
      );
    }

  }
}

export default App;
