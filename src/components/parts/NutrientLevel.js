import React from 'react';
import StyledProgressbar from './Charts/CircularProgressBar';
import './NutrientLevel.css'

const NutrientLevel = (props) => {

    const nutrient = props.nutrient;
    let quantity = nutrient.quantity;
    
    // only shows decimal points if the quantity is between 0 and 1.
    if (quantity > 0 && quantity < 1){
        quantity = quantity.toFixed(1)

    } else {
        quantity = quantity.toFixed(0)
    }

    return(

        <div className="nutrient-level">
            <div className ="nutrient-chart">
                <StyledProgressbar
                    key = {nutrient.name}
                    percentage={nutrient.dvPercentage}
                    text = {nutrient.dvPercentage.toString()+"%"}
                />
            </div>
            <div className="nutrient-info paragraph">
                {nutrient.name} : {quantity}{nutrient.unit}
            </div>
        </div>
    );
}

export default NutrientLevel;