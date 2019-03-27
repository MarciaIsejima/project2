import React from 'react';
import './css/RecipeItem.css';
import YummlyAttribution from './YummlyAttribution.js';
import ShareIcon from '@material-ui/icons/Share';

const RecipeItem = (props) => {

    const recipe = props.recipe;
    
    return(

        <section className="recipe-header">
            <div className="recipe-data-container">
                <h2 className="recipe-name heading-2">{recipe.name}</h2>
                <p className="recipe-source"><a href={recipe.source.sourceRecipeUrl} target="_blank" rel="noopener noreferrer">By: {recipe.source.sourceDisplayName}</a></p>
                <div className="recipe-share-rating-div">
									<ShareIcon />
									<p className="recipe-rating">{recipe.rating} <img className="recipe-rating-stars" src="" alt="stars"></img></p>
								</div>
								
                <div className="recipe-time-ingred-div">
									<img className="preparation-time" src="./images/icon/time.svg" alt="clock"></img>
									<p className="recipe-total-time">{recipe.totalTime}</p>
									<div className="separator"></div>
									<p className="recipe-total-ingredients-number">{recipe.ingredientLines.length}</p>
									<p className="recipe-total-ingredients">Ingredients</p> 
                </div>
								<div className="recipe-instructions"><button className="button-large button-orange">Instructions</button></div>
            </div>
						<div className="recipe-img-container"><img className="recipe-img" src={recipe.images[0].hostedLargeUrl} alt="recipe"></img></div>
            <YummlyAttribution recipe={recipe}/>
        </section>
    );
}

export default RecipeItem;
