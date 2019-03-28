import React, {Component} from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import AboutCard from "../parts/AboutCard"
import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"      


//members photo
import vu from "../../assets/team/vu.jpg"
import marcia from "../../assets/team/marcia.jpg"
import tanya from "../../assets/team/tanya.jpg"
import merry from "../../assets/team/merry.jpg"
import yukako from "../../assets/team/yukako.jpg"
import { Divider } from "@material-ui/core";


const styles = theme => ({
    root:{
        maxWidth: "100vw",
        overflow: "hidden",
    },

   
    button: {
        color:"white",
        fontWeight:"bold",
       // margin:"50px"
    },

   
})


const About = props => {
    const classes = props.classes

    return(
        <div className="aboutus">
        <Header />
        <AboutCard 
            header_1="About Us"
            para_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere diam id nunc sodales ullamcorper. Sed congue lacus sit amet lectus posuere volutpat"
            align="center"
        

            header_2= "Team Members"

            img_1={vu}
            headerName_1="Vu Anh Pham"
            position_1="Project Manager / Frontend Developer"

            img_2={marcia}
            headerName_2="Marcia Emi Isejima"
            position_2="Backend developer / QA"

            img_3={tanya}
            headerName_3="Thanyathorn Sangthien"
            position_3="UX Designer/ Animator"

            img_4={merry}
            headerName_4="Merry Nguyen"
            position_4 ="UI Designer"

            img_5={yukako}
            headerName_5 = "Yukako Suzuki"
            position_5 = "Designer / Web Content"


            header_3="Become A Partner"
            para_3="Thank you for your interest to Selfnourish!"
            para_4="If you are interested in becoming our business partner"

        
        />
        <Button color="primary" className={classes.button} variant="contained" size="large">

        Contact Us
        </Button>

        <Footer />


        </div>
    )
}
export default withStyles(styles) (About)