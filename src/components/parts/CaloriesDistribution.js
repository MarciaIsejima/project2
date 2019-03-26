import React from 'react';
import * as nutrientAPI from '../api/nutrientApi';
import TwoLevelPieChart from './Charts/TwoLevelPieChart';
import './CaloriesDistribution.css';

const CaloriesDistribution = (props) => {

    // Get the calories distribution of the recipe
    const caloriesDistribution = nutrientAPI.getCaloriesDistribution(props.recipe);

    // Build the data object for the pie chart
    const caloriesData = [
        {
            name: 'Fat',
            value: caloriesDistribution.fatCal,
            fill: "#90d200"
        },
        {
            name: 'Protein',
            value: caloriesDistribution.proteinCal,
            fill: "#2d58ba"
        },
        {
            name: 'Carbs',
            value: caloriesDistribution.carbCal,
            fill: "#ff8500"
        }
    ]

    return(

        <div className="calories-level">
            <div className ="calories-chart">
                <TwoLevelPieChart
                    data = {caloriesData}
                />
            </div>
            <div className="calories-info">
                {caloriesDistribution.totalCal.toFixed(0)} Calories
            </div>
        </div>
    );
}

export default CaloriesDistribution;