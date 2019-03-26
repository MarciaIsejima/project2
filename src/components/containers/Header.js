import React, { Component } from "react";
import Nav from "../parts/Nav";
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

const Wrapper = styled("div") ({
//  root:{
    padding: "5px 30px",
    position: "sticky",
    top: 0,
    backgroundColor: "transparent",
    // backgroundColor:"white",
    "-webkit-box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    "-moz-box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    "box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    
    zIndex: 999,

    // [theme.breakpoints.up("md")]: {
    //   //backgroundColor: "transparent",
    //    backgroundColor:"white"
    // }},
 
    

})

class Header extends Component {


  render() {

      const {match} = this.props;
      

    
           
       return <Wrapper>{match.path === "/" && <Nav/>}</Wrapper>
          
     

 
}
}

export default withRouter(Header)


