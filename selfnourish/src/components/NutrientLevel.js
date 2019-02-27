import React from 'react';
import StyledProgressbar from './Charts/CircularProgressBar';
import './NutrientLevel.css'

const NutrientLevel = (props) => {

    const nutrient = props.nutrient;
    
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
                {nutrient.name} : {nutrient.quantity}{nutrient.unit}
            </div>
        </div>
    );
}

export default NutrientLevel;
