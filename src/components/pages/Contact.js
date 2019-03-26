import React, { Component } from "react"
 import { withStyles } from "@material-ui/core/styles"
 import Typography from "@material-ui/core/Typography"
 import { Divider } from "@material-ui/core";
 import Button from "@material-ui/core/Button"
 import { withRouter } from "react-router-dom"

 

 import ContactUs from "../parts/ContactUs"
 import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"      
    
 const styles = theme => ({
    root:{
        marginTop:"50px"
    },
    
    card:{
        marginTop:"50px"

    },
    
    button:{
        marginTop:"30px",
        color:"white",
        fontWeight:"bold"
    }
})   

 const Contact = props => {
    const classes = props.classes
    return(
       
      
       <div className="contact">
        <Header />
        <ContactUs
        header_2="We'd love to hear from you"
        para_1="Thank you for your interest to SelfNourish! if you would like to keep up to date about SelfNourish, please fill in the form below"
        id="Contact us"
        />

        <Footer />

        </div>
       
    )
 }

 export default Contact



 