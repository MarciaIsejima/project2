import React from 'react';
import NutrientsLevelContainer from './NutrientsLevelContainer';
import CaloriesDistribution from './CaloriesDistribution';
import './NutritionFactsContainer.css';

const NutritionFactsContainer = (props) => {


    return(
        <section className="recipe-nutrition-facts">
            <h3 className="heading-3"><img src='././images/ingredients.png' alt="" aria-hidden="true"></img>Nutrition Facts</h3>
            <div className="nutrition-facts-wrapper">
                <CaloriesDistribution
                    recipe = {props.recipe}
                />
                <NutrientsLevelContainer
                    recipe = {props.recipe}
                />
            </div>
            <div className="favourite-div"><button className="button-green">Add to Favourites</button></div>
            
        </section>
        
    )

  };


export default NutritionFactsContainer;