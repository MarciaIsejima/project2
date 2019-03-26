import React from 'react';
// import './RecipeItem.css';
import YummlyAttribution from './YummlyAttribution.js';

const RecipeItem = (props) => {

    const recipe = props.recipe;
    
    return(

        <section className="recipe-header">
            <div className="recipe-left-container">
                <h2 className="recipe-name heading-2">{recipe.name}</h2>
                <p className="recipe-source paragraph"><a href={recipe.source.sourceRecipeUrl} target="_blank" rel="noopener noreferrer">By: {recipe.source.sourceDisplayName}</a></p>
                <p className="recipe-rating">{recipe.rating} <img className="recipe-rating-stars" src="" alt="stars"></img></p>
                <div className="recipe-time-div"><img className="preparation-time" src="./images/icon/time.svg" alt="clock"></img><p className="recipe-total-time">{recipe.totalTime}</p></div>
                <div className="recipe-ingredients-div"><p className="recipe-total-ingredients-number">{recipe.ingredientLines.length}</p><p className="recipe-total-ingredients">ingredients</p> </div>
                <div className="recipe-instructions"><button className="button-orange">Instructions</button></div>
            </div>
            <div className="recipe-right-container">
                <div className="recipe-img-container"><img className="recipe-img" src={recipe.images[0].hostedLargeUrl} alt="recipe"></img></div>
                <YummlyAttribution recipe={recipe}/>
            </div>

        </section>
    );
}

export default RecipeItem;