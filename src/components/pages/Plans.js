import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button"
import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"   
import Card1 from "../parts/Card1"

 

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
   
   
const Plans = props => {
    const classes = props.classes

    return (
        
       
        <div className="card">
         <Header />    
        <Card1

            header_2="Membership"

            header_3="BASIC"
            
            para_2={[<ul><li>lorem ipsum de lorem ipsum</li>
            <li>lorem ipsum de lorem ipsum</li>
            <li>lorem ipsum de lorem ipsum</li>
            <li>lorem ipsum de lorem ipsum</li>
            </ul>]}

            

            header_4="PREMIUM"
            
            para_3={[<ul><li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                </ul>]
                }


            header_5="PROFESSIONAL"

            para_4={[<ul><li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                <li>lorem ipsum de lorem ipsum</li>
                </ul>]}




             para_1="Ready to start planning your next meal"
                
        />
        <Button color="primary" className={classes.button} variant="contained" size="large">

            Stay Updated
        </Button>

        <Footer/>


    </div> 
              

    )


    

}   
 
export default withStyles(styles) (Plans);
   