
import React from 'react';
import './NutrientsLevelContainer.css';
import * as nutrientAPI from '../api/nutrientApi';
import NutrientLevel from './NutrientLevel';

const NutrientsLevelContainer = (props) => {

    // search each element in 'nutrientsArray' on the recipe and gets the quantity
    const selectedNutrients = nutrientAPI.getDVPercentValues(props.recipe);
    
    // build the list of nutrients pie charts to be shown
    const nutrientsList = selectedNutrients.map((item) =>
        <NutrientLevel
            key = {item.name}
            nutrient = {item}
        />
    );

    return(
        <div className="nutrients-container">
            {nutrientsList}
        </div>
    );
}

export default NutrientsLevelContaine