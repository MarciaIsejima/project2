import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import InformationBlock from "./InformationBlock"

const styles = (theme, props) => ({
    root: {
      padding: "0px 40px",
      //minHeight: "80vh",
      margin: "0px 50px"
    },
    container: {
      maxWidth: "75rem",
      margin: "auto",
    },
    item: {
      //margin: "20px auto",
      textAlign: "left",
      marginTop:"-50px"
      
    },
    img: {
      width: "100%",
      "z-index": "-1",
      marginTop:"-100px",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }  
    },
    button: {
      alignSelf: "start",
      marginTop: "20px",
      background: theme.palette.primary.main,
      color:"#fff",
      fontWeight:"bold"
    },
    
  })

 

  class Hero extends Component {
    render() {
      const classes = this.props.classes
      return (
        <div className={classes.root} id={this.props.id}>
          <Grid
            container
            alignItems="center"
            alignContent="space-around"
            className={classes.container}
          >
            <Grid item xs={12} md={6}>
              <InformationBlock
                header_1={this.props.header_1}
                headline={this.props.headline}
                className={classes.item}
                
              />
            {this.props.button && (
              <Button
              href="#"
              color="primary"
              className={classes.button}
              variant="contained"
              size="large"
              >
                {this.props.button}
              </Button>
            )}
            </Grid>
            
            <Grid item xs={12} md={6} className={classes.item}>
              {this.props.img && (
                <img
                  className={classes.img}
                  src={this.props.img}
                  alt={this.props.alt}
                />
              )}
            </Grid>
          </Grid>
        </div>
      )
    }
  }
  
  export default withStyles(styles)(Hero)