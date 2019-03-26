import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom"
import Home from "../pages/Home"


//user ROUTE to switch from different pages
class Body extends Component {
  render() {
    return (
     <Home />
    )
  }
} 
export default Body;