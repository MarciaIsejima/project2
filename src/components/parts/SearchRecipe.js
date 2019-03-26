import React, { Component } from "react";
import RecipeList from "./RecipeList";

class SearchRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
			error: null,
			isLoading: false,
			list: []
    };
  }

	retrieveRecipe(id) {
			this.props.retrieveRecipe(id);
			window.alert("search recipe: " + id)
	}

	searchRecipes(ingredient){
		this.setState({ isLoading: true });

		let requestURL = `http://api.yummly.com/v1/api/recipes?_app_id=${process.env.REACT_APP_YUMMLY_APP_ID}&_app_key=${process.env.REACT_APP_YUMMLY_API_KEY}`
		//let query = '&q=onion'
		let query='&maxResult=20'
		//query +='&maxResult=21&requirePictures=true'
	
// 		if (ingredient!=='') {
// window.alert("search recipe: "+ingredient)	
// 				query = query + "&q=" + "broccoli"
// 		}
console.log(query)
		fetch(requestURL+query)
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Please reload page ...');
				}
			})
			.then(data => {this.setState({ list: data.matches, isLoading: false })})
			.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount(){
		this.searchRecipes(this.props.ingredient)
	}




  render() {

		const { list, isLoading, error } = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			return <p>Loading ...</p>;
		}

    return (
      <div>
        <RecipeList
          title = {this.props.title}
          list = {list}
					retrieveRecipe={this.retrieveRecipe.bind(this)}
        />
      </div>
    );
  }
}
 
export default SearchRecipe;