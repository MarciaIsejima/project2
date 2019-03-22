import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
		Switch
} from "react-router-dom";
import Home from "./Home";
import Condition from "./Condition";
// import Plans from "./Plans";
// import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import SingleRecipe from './SingleRecipe';

class Main extends Component {
  render() {
    return (

        <HashRouter>
            <div className="main-wrapper">
                 <nav>
                 
                    <ul className="header">
                        <li key="home"><NavLink exact to="/">Home</NavLink></li>
                        <li key="recipes"><NavLink to="/recipe">Recipes</NavLink></li>
                        <li key="plans"><NavLink to="/plans">Plans</NavLink></li>
                        <li key="about"><NavLink to="/about">About Us</NavLink></li>
                        <li key="contact"><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </nav>

                <div className="content">
									<Switch>
                    <Route exact path="/" component={Home}/>
										<Route path="/recipe/search" component={Search}/>
										<Route path="/recipe/single/:recipeId" component={SingleRecipe}/>
                    <Route path="/recipe" component={Condition}/>
                    <Route path="/plans" component={Search}/>
                    <Route path="/about" component={SingleRecipe}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/search" component={Search}/>
                  </Switch>  
                </div>
                <footer>
                    <div>this is my footer</div>
                </footer>

            </div>

        </HashRouter>

    );
  }
}
 
export default Main;