import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"

import InformationBlock from "../parts/InformationBlock"


const styles = theme => ({
  root: {
    
    //margin: "auto",
    //padding: "60px 30px",
    //overflow: "hidden",
    margin: "0px 50px",
    padding: "0px 40px",
    textAlign:"center",
    marginTop:"20px"
  },
  container:{
    maxWidth: "75em",
    margin: "auto",
    // marginTop:"40px"

  },
  item: {
    "-webkit-box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    "-moz-box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    "box-shadow": "0px 3px 17px 1px rgba(0,0,0,0.1)",
    background: "#F5F5F5",
    height: "80%",
    padding: "30px 30px 10px 30px",
    

    "&:hover" :{
        border:"2px solid orange" ,   
    },

    textAlign: "center",
    margin: "0 auto"
  },

  item1:{
    margin:"0 auto",
    marginBottom:"50px",
  },  
  item3:{
    marginTop:"30px",
    margin:"0 auto",
    fontSize:"20px"
  },

  container1:{
    height:"60vh",
  }
 
})

const Card1 = props => {
  const classes = props.classes
  return (
        <div className={classes.root} id={props.id}>
          <Grid
            container
            alignItems="center"
            alignContent="space-around"
            className={classes.container}
          >
            <Grid item xs={12} md={5} className={classes.item1}>
              <InformationBlock
                header_2={props.header_2}
                align="center"
              />
            </Grid>


            <Grid container alignItems="stretch" spacing={40} className={classes.container1}>
                 <Grid item xs={12} md={4}>
                    <InformationBlock
                    //header_align={props.header_align}
                    header_3={props.header_3}
                    img={props.img_1}
                    className={classes.img}
                    para_2={props.para_2}
                    align="center"
                    className={classes.item}
                    
                />
                
                </Grid>

                <Grid item xs={12} md={4}>
                    <InformationBlock
                    //header_align={props.header_align}
                    header_3={props.header_4}
                    img={props.img_2}
                    className={classes.img}
                    para_2={props.para_3}
                    align="center"
                    className={classes.item}
                />
                </Grid>

                <Grid item xs={12} md={4}>
                    <InformationBlock
                    //header_align={props.header_align}
                    header_3={props.header_5}
                    img={props.img_3}
                    className={classes.img}
                    para_2={props.para_4}
                    align="center"
                    className={classes.item}
                />
                </Grid>
        
            </Grid>

            <Grid item xs={12} md={5} className={classes.item3}>
              <InformationBlock
                header_2={props.header_6}
                para_1={props.para_1}
                align="center"
                button={props.button}
              />
            </Grid>
            

            
            
          </Grid>
        </div>
  )
}

export default withStyles(styles)(Card1)