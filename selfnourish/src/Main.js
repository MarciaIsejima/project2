import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Condition from "./components/Condition";
import Plans from "./Plans";
import About from "./About";
import Contact from "./Contact";
import SearchRecipe from "./components/SearchRecipe";
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
                    <Route exact path="/" component={Home}/>
                    <Route path="/recipe" component={Condition}/>
										<Route path="/recipe/single" component={SingleRecipe}/>
                    <Route path="/plans" component={SearchRecipe}/>
                    <Route path="/about" component={SingleRecipe}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/search" component={SearchRecipe}/>
                    
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