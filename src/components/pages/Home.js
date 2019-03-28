 import React, { Component } from "react"
 import { withStyles } from "@material-ui/core/styles"
 import Typography from "@material-ui/core/Typography"
 import { Divider } from "@material-ui/core";
 import Button from "@material-ui/core/Button"
 import SvgIcon from '@material-ui/core/SvgIcon'
// // import parts
 import Hero from "../parts/Hero"
import Features from "../parts/Features"
import HowItWorks from "../parts/HowItWorks"
import KeepMeUpdated from "../parts/KeepMeUpdated"





// //import assets
 import hero from "../../assets/hero/hero.png"
import howitworks from "../../assets/hero/how_it_works.png"
import feature1 from "../../assets/features/feature1.svg"
import feature2 from "../../assets/features/feature2.svg"
import feature3 from "../../assets/features/feature3.svg"

import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"







const styles = theme => ({
    root: {
      maxWidth: "100vw",
      overflow: "hidden",
    //   maxWidth:"60rem"
    },
     
    header_1:{
        fontSize:"32px",
    },

    hero: {
      width: "50%",
      position: "absolute",
      top:0,
      "z-index": -1, 
    },


    img:{

        display: "none",
       
       [theme.breakpoints.up("md")]: {
            marginTop:"-100px"
       }
    },

    herosection:{
        marginTop:"-150px",
    },
    
    howto1:{
        backgroundColor:"coral"
    },
    
    
  })


  

const Home = props => {
    const classes = props.classes
    return(
       
        <div className="herosection">
            <Header />

            <Hero 
               header_1="SelfNourish" 
               headline="Pesonalized recipes for your lifestyle and indivdual dietary needs"
               button="TRY IT NOW"
               id="home" 
               img={hero}
               alt="hero"
            />

           
            
        

        <div className="whatis" id="selfnourishintro">
        <Features 
        header_2= "What Is SelfNourish"
        para_1= "SelfNourish is a recipe search application for people who need special diets. You will find the recipes with nutritional infromation accroding to your condition"
        

        
        
        img_1={feature1}
        src={feature1}
        alt="feature1"
        header_3="Eat what You Need"
        para_2="Retrieving the list of recipes according to a user's special requirement or preferred ingredients"


        img_2={feature2}
        src={feature2}
        header_4="Dietary Recommendation"
        para_3="Using data visualization to demonstrate nutrition fact"

        img_3={feature3}
        src={feature3}
        header_5="Collect Favorite Recipes"
        para_4="Collecting, saving and organizing favourite recipes by a simple click"
        align="center"
        />



        </div>

        <div className="howto" id="steps"> 
        <HowItWorks
        header_2="How It Works"

        img={howitworks}
        headline="With just a few simple steps, you can prepare your meals easily"
        button="TRY IT NOW"

        header_4={[<span key="span" className="key">1</span>,"Select your condition"]}
        para_4={["View the general guideline for your condition"]}

        header_5={[<span key="span" className="key">2</span>, "Search for recipes" ]}
        para_5={["Input your favourite ingredients"]}

        header_6={[<span key="span" className="key">3</span>, "Select your favourite" ]}
        para_6={["Select a recipe and explore how to cook"]}
        />

       
       
        </div>




        <div className="update">
            <KeepMeUpdated 

                header_2="Keep Me Updated"
                para_1="Recieving daily recipe recoomendation via email"
            
            />
        
        </div> 

    

        <Footer />        
        

       



       

        </div>
    )
}




 export default withStyles(styles) (Home);


