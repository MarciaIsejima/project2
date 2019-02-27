import React from 'react';
import './RecipeItem.css';

const RecipeItem = (props) => {

    const recipe = props.recipe;
    
    return(

        <section className="recipe-header">
            <div className="recipe-left-container">
                <h2 className="recipe-name heading-2">{recipe.name}</h2>
                <p className="recipe-source"><a href={recipe.source.sourceRecipeUrl} target="_blank" rel="noopener noreferrer">By: {recipe.source.sourceDisplayName}</a></p>
                <p className="recipe-rating">{recipe.rating} <img className="recipe-rating-stars" src="" alt="stars"></img></p>
                <p className="recipe-total-time"><img className="preparation-time" src="" alt="clock"></img>{recipe.totalTime}</p>
                <p className="recipe-total-ingredients"><span className="recipe-total-ingredients-number">{recipe.ingredientLines.length}</span>ingredients</p> 
                <div className="recipe-instructions"><button className="button-orange">Instructions</button></div>
            </div>
            <div className="recipe-right-container">
                <div className="recipe-img-container"><img className="recipe-img" src={recipe.images[0].hostedLargeUrl} alt="recipe"></img></div>
            </div>

        </section>
    );
}

export default RecipeItem;
