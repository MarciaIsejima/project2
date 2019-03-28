import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import InformationBlock from "./InformationBlock"
import Button from "@material-ui/core/Button"

import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
//import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
    root: {
        // margin: "0px 50px",
        
        margin: "auto",
        paddingTop: "30px",
        paddingBottom:"30px",
        
        padding: "0px 40px",
        marginBottom:"-100px",
        textAlign:"left",

        marginTop: "120px",
        marginBottom:"40px",

        backgroundColor:"lightgrey"
        
        
      },

      container:{
        margin:"auto",
        maxWidth: "75rem"
      },


      cssLabel: {
        color: 'black',
        
      },
    
      cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          //borderColor: "black",
          fontFamily:"Raleway"
        }
      },
    
      cssFocused: {},
      notchedOutline: {
        //borderWidth: '1px',
        //borderColor: 'black !important',
        backgroundColor: "white",
        borderRadius: "25px",
        
      },
     input:{
         width:"500px",
     },

     button:{
         color:"white",
         fontWeight:"bold",
        
     }


})


const KeepMeUpdated = props => {
    const classes = props.classes
    return (
        <div className={classes.root} id={props.id}>

        <Grid
        container
        alignItems="center"
        alignContent="space-around"
        className={classes.container}
        >

        <Grid item xs={12} md={3}>
              <InformationBlock
                header_2={props.header_2}
                para_1={props.para_1}
              />
        </Grid>   

        
        <Grid item xs={12} md={6} className={classes.container}>

        <TextField
            className={classes.input}
            variant="outlined"
            label="Enter Your Email"
            placeholder = ""
            
            margin="dense"
            
           
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}


          />

         </Grid> 

        <Grid item xs={12} md={3} className={classes.container}>
            <Button color="primary" className={classes.button} variant="contained" size="large">

               Subscribe 
            </Button>
        </Grid>
        </Grid>

        

        </div> 
    )
}

export default withStyles(styles)(KeepMeUpdated)

