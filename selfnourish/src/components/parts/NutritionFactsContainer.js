import React from 'react';
import NutrientsLevelContainer from './NutrientsLevelContainer';
import CaloriesDistribution from './CaloriesDistribution';

const NutritionFactsContainer = (props) => {


    return(
        <section className="recipe-nutrition-facts">
            <h3 className="recipe-nutrition-facts-heading heading-2"><img className="nutrition-facts-image" src="./images/icon/nutrition_fact.svg" alt="" aria-hidden="true"></img>Nutrition Facts</h3>
            <div className="nutrition-facts-wrapper">
                <CaloriesDistribution
                    recipe = {props.recipe}
                />
                <NutrientsLevelContainer
                    recipe = {props.recipe}
                />
            </div>
           
        </section>
        
    )

  };


export default NutritionFactsContainer;