import React, { Component } from "react"

import './css/Condition.css';
import SearchRecipe from "../../components/parts/SearchRecipe";
import SimpleBarChart from '../../components/charts/SimpleBarChart';
import {Redirect} from "react-router-dom";
import LinkButton from '../../components/parts/LinkButton';

class Condition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      selectedCondition: {id: 0},
			selectedRecipeId: '',
    };
  }

  // function that updates the selected condition
  updateCondition(condition) {

     this.setState(
        {selectedCondition: condition}
    );
  };

  // function that retrieves existing conditions
  retrieveConditions() {
    let conditionsList = [];
    const imgPath = './assets/conditions/'
    conditionsList.push({id: 0, name: "No Restrictions", imgSrc: imgPath+"condition1.svg", nutrientIntake: [{nutrient: "Sodium", level:"low"},{nutrient: "Calcium", level:"high"},{nutrient: "Iron", level:"high"}], guidelines: ["According to ERC(The Evidence Review Cycle for Dietary Guidance), the majority of Canadians consumed much sodium than recommended.", "On the other hand, Vitamin D and Calcium are inclined to lack. Especially the areas in cold climate can’t hold sunlight during winter, it causes the deficiency in Vitamin D which can be produced by skin with sunlight."] });
    conditionsList.push({id: 1, name: "Kidney Disease", imgSrc: imgPath+"condition2.svg", nutrientIntake: [{nutrient: "Sodium", level:"low"},{nutrient: "Protein", level:"low"},{nutrient: "Phosphorus", level:"low"}], guidelines: ["Diet and nutrition are an important part of the treatment plan for patients with kidney failure. That’s because what they eat affects directly their kidneys.", "Patients with this condition should choose modest-size servings of protein, aim to limit sodium to 1500 to 2000 mg per day and avoid foods with phosphate additives."] });
    conditionsList.push({id: 2, name: "Cardiovascular Disease", imgSrc: imgPath+"condition3.svg", nutrientIntake: [{nutrient: "Fat", level:"low"},{nutrient: "Sodium", level:"low"},{nutrient: "Fiber", level:"high"}], guidelines: ["The cardiovascular diseases patients are recommended to prevent obesity and keep low-fat diet. Especially trans fatty acid should be avoided, while omega-3 fatty acid is recommended to take.", "On the other hand, dietary fibre is encouraged to take as it decreases the risk of cardiovascular diseases."] });
    conditionsList.push({id: 3, name: "Pregnancy", imgSrc: imgPath+"condition4.svg", nutrientIntake: [{nutrient: "Folic Acid", level:"high"},{nutrient: "Calcium", level:"high"},{nutrient: "Iron", level:"high"}], guidelines: ["Pregnant women’s bodies tend to lack folic acid, calcium and Iron. Along with these nutrients, pregnant women may watch your sodium and sugar intake when developing Pregnancy-Induced Hypertension or Gestational diabetes."] });
    conditionsList.push({id: 4, name: "Osteoporosis", imgSrc: imgPath+"condition5.svg", nutrientIntake: [{nutrient: "Calcium", level:"high"},{nutrient: "Vitamin D", level:"high"},{nutrient: "Phosphorus", level:"medium"}], guidelines: ["As most of us know, calcium, which is the major component of bone, is recommended to take to improve Osteoporosis, and Vitamin D helps to absorb Calcium.", "Phosphorus intake should be watched as it can inhibit Calcium absorption and many kinds of processed foods contain it."] });
    conditionsList.push({id: 5, name: "Diabetes", imgSrc: imgPath+"condition6.svg", nutrientIntake: [{nutrient: "Sugar", level:"low"},{nutrient: "Fiber", level:"high"},{nutrient: "Fat", level:"low"}], guidelines: ["Although diabetes doesn’t forbid any types of nutrients but requires us to watch foods that cause blood sugar spikes such as sugary snacks or refined grains. Dietary fibre helps to keep the blood sugar level stable and add satiety.", "Fat also prevents blood sugar spike but should be carefully watched as it may cause obesity and worsen the condition."] });
    return(conditionsList);
  }

    // defines the title for list of recipes section, according to the condition selected
    retrieveTitle(condition) {
        let title = "";
        switch (condition.id) {
            case 0: // no restrictions
                title = "Popular Recipes";
                break;
            default:
                // title ="Recommended Recipes for " + condition.name;
                title = "Recommended Recipes";
        }
        return(title);
    };

		// if user selected a recipe from the recipe list
		retrieveRecipe(id){
			if (id!==''){
				this.setState(
					{selectedRecipeId: id}
				);
			}

		}

  render() {

		if (this.state.selectedRecipeId!=='') {
			return <Redirect to={'/recipe/single/'+this.state.selectedRecipeId} />
		}

    let conditions = this.retrieveConditions();


    // build the conditions list
    const listItems = conditions.map((item) =>
        <li key={item.id} onClick={()=>{this.updateCondition(item)}}>
            <img src={item.imgSrc} alt={item.name} className={(this.state.selectedCondition.id === item.id) ? "selected-condition" : "unselected-condition" }></img>
            <div className={(this.state.selectedCondition.id === item.id) ? "selected-condition" : "unselected-condition" }>{item.name}</div>
        </li>
    );

    if(!this.state.selectedCondition){
      return null
    } else {
      console.log(this.state.selectedCondition)
      return (
          <div className="condition-wrapper">
            <section className="condition-section">
                <div className="condition-section-header">
                    <h2 className="heading-2">Your Health Condition</h2>
										<LinkButton className="button-orange search-recipe-button" to='../search'>Search Recipes</LinkButton>
                </div>
                <p>Select a condition to view general guidelines and recipes for a healthy diet: </p>
                <ul className="conditions-list">
                    {listItems};
                </ul>
            </section>
            <section className="general-guideline-section">
                <h2 className="heading-2">General Guidelines</h2>
                <div className="general-guideline-wrapper">
                    <div>
                        <SimpleBarChart nutrientsList={conditions[this.state.selectedCondition.id].nutrientIntake}></SimpleBarChart>
                        
                    </div>
                    <div>
                        <h3 className="heading-3">{conditions[this.state.selectedCondition.id].name}</h3>
                        {conditions[this.state.selectedCondition.id].guidelines.map((line) => <p key={line} className="paragraph-small">{line}</p>
                            
                        )}
                    </div>
                </div>
            </section>
            <section className="related-recipes-section">
							<SearchRecipe
								title = {(this.state.searchIgredient==='')? "Popular Recipes" : "Recommended Recipes"}
								condition = {this.state.selectedCondition}
								retrieveRecipe={this.retrieveRecipe.bind(this)}
							/>
            </section>

          </div>

      );
    }

  }
}

export default Condition;