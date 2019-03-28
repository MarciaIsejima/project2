import React from 'react';

const IngredientsList = (props) => {

    const ingredients = props.recipe.ingredientLines;
    const listItems = ingredients.map((item) =>
    <li key={Math.random()}>{item}</li>
    );

    return(

        <section className="recipe-ingredients-list">
            
            <h3 className="heading-3"><img className="ingredients-image" src="./images/icon/ingredient.svg" alt="" aria-hidden="true"></img>Ingredients:</h3>
            <p className="total-servings paragraph">Servings: {props.recipe.numberOfServings}</p>
            <ul className="ingredients-list">{listItems}</ul>,
       
        </section>
    );

    
}

export default IngredientsList;