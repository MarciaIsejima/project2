// function that returns an array with the nutrients to be displayed
function getNutrientsArray() {
    //create nutrients list array
    const nutrientsCompleteArray = [
        { name: "Fat", id: 'FAT', dvQuantity: 65, dvUnit: 'g', show: 1 },
        { name: "Saturated fat", id: 'FASAT', dvQuantity: 20, dvUnit: 'g', show: 0 },
        { name: "Trans Fat", id: 'FATRN', dvQuantity: 20, dvUnit: 'g', show: 0 },
        { name: "Cholesterol", id: 'CHOLE', dvQuantity: 300, dvUnit: 'mg', show: 0 },
        { name: "Sodium", id: 'NA', dvQuantity: 2400, dvUnit: 'mg', show: 1 },
        { name: "Carbs", id: 'CHOCDF', dvQuantity: 300, dvUnit: 'g', show: 1 },
        { name: "Fibre", id: 'FIBTG', dvQuantity: 25, dvUnit: 'g', show: 1 },
        { name: "Sugars", id: 'SUGAR', dvQuantity: 25, dvUnit: 'g', show: 0 }, // 37.5g for men and 25g for women - American Heart Association
        { name: "Protein", id: 'PROCNT', dvQuantity: 50, dvUnit: 'g', show: 1 }, //check source
        { name: "Vitamin A", id: 'VITA_IU', dvQuantity: 5000, dvUnit: 'IU', show: 0 }, // source: U.S. Food and Drug Administration 
        { name: "Vitamin C", id: 'VITC', dvQuantity: 60,  dvUnit: 'g', show: 0 },
        { name: "Calcium", id: 'CA', dvQuantity: 1100, dvUnit: 'mg', show: 0 },
        { name: "Iron", id: 'FE', dvQuantity: 14, dvUnit: 'mg', show: 0 }
    ];
    
    const nutrientsArray = nutrientsCompleteArray.filter( function(el) { return el.show });

    return(
        nutrientsArray
    );
}

// function that calculates the percentual daily value for a give nutrient
function calculateDVRatio (dvQuantity, dvUnit, quantity, unit) {
    let multiplier = 1;
    if (dvUnit !== unit) {
        if (dvUnit === 'g') {
            if (unit === 'mg') {
                multiplier = 0.001;
            } else {
                return (null);
            }
        } else if (dvUnit === 'mg') {
            if (unit === 'g') {
                multiplier = 1000;
            } else {
                return (null);
            }
        } 
    }
    return (quantity/dvQuantity * multiplier * 100).toFixed(0);
}

// function that gets the quantity and the equivalent in DV percent of a selected list of nutrients
export function getDVPercentValues(recipe) {

    // gets the list of nutrients to be displayed
    const nutrientsArray = getNutrientsArray();
    
    const selectedNutrients = [];
    for (var i = 0, len = nutrientsArray.length; i < len; i++) {
        let item = nutrientsArray[i];
        let nutrient = recipe.nutritionEstimates.find(nutrient => nutrient.attribute === item.id);
        if (typeof nutrient !== "undefined") {
            let nutrientItem = {
                name: item.name,
                quantity: nutrient.value,
                unit: nutrient.unit.abbreviation,
                dvPercentage: calculateDVRatio(item.dvQuantity, item.dvUnit, nutrient.value, nutrient.unit.abbreviation)
            };
            selectedNutrients.push(nutrientItem);
        }
    };

    return(selectedNutrients);
}

// function that estimates the calories distribution in a given recipe
export function getCaloriesDistribution(recipe) {

    let nutrient = {};
    let quantity = 0;
    let proteinCal = 0;
    let carbCal = 0;
    let fatCal = 0;
    let totalCal = 0;

    //calories due to Protein
    nutrient = recipe.nutritionEstimates.find(nutrient => nutrient.attribute === 'PROCNT');
    if (typeof nutrient !== "undefined") {

        //get the fat quantity and convert to grams
        if (nutrient.unit.abbreviation === 'g')
            quantity = nutrient.value;
        else if (nutrient.unit.abbreviation === 'mg')
            quantity = nutrient.value * 1000;

        // multiply the quantity per calories and obtain the total calories
        proteinCal = quantity * 4;

    } 

    //calories due to Fat
    nutrient = recipe.nutritionEstimates.find(nutrient => nutrient.attribute === 'FAT_KCAL');
    if (typeof nutrient !== "undefined") {

        //get the fat quantity in kcal
        if (nutrient.unit.abbreviation === 'kcal')
            quantity = nutrient.value;
        else if (nutrient.unit.abbreviation === 'cal')
            quantity = nutrient.value * 1000;

        // multiply the quantity per calories and obtain the total calories
        fatCal = quantity;

    } 
    
    // get the total of calories from the recipe
    nutrient = recipe.nutritionEstimates.find(nutrient => nutrient.attribute === 'ENERC_KCAL');
    if (typeof nutrient !== "undefined") {

        //get the fat quantity and convert to grams
        if (nutrient.unit.abbreviation === 'kcal')
            quantity = nutrient.value;
        else if (nutrient.unit.abbreviation === 'cal')
            quantity = nutrient.value * 1000;
      
        // obtain the total calories
        totalCal = quantity;

    } 

    //calories due to Carbs
    //calculates subtracting the calories due to Protein and Fat from the estimated total calories of the recipe
    carbCal = Math.max(totalCal - proteinCal - fatCal, 0);

    // build the response object with calories distribution
    let caloriesDistribution = {
        fatCal: fatCal,
        proteinCal: proteinCal,
        carbCal: carbCal,
        totalCal: totalCal
    };
    
    return(caloriesDistribution);

}

// function that retrieves a list of recipes, given a condition
export function retrieveRecipeList(condition) {
    let list = [];
    let requestURL = `http://api.yummly.com/v1/api/recipes?_app_id=${process.env.REACT_APP_YUMMLY_APP_ID}&_app_key=${process.env.REACT_APP_YUMMLY_API_KEY}`

    fetch(requestURL)
    .then(res => res.json())
    .then(
    (data) => {
        return(data.matches)
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
        return(error)
    });

    return(list);
}