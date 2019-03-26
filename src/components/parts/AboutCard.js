import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import SvgIcon from '@material-ui/core/SvgIcon'

import Members from './Members.js'
import InformationBlock from "./InformationBlock"

const styles = (theme) => ({
    root:{
    maxWidth:"100vw",
    textAlign:"center",
    
    },

    container:{

        maxWidth: "75em",
        margin: "auto",

    },

    container2:{
        margin: "0 auto"
    },

    item1:{
        margin:"50px",
    },

    item2:{
        margin:"50px",
        marginTop:"0px",
    },

    item3:{
        margin:"50px",
       
    },

})


function LinkedinIcon1(props) {
    return (
        <a href="https://www.linkedin.com/in/daphnepham/">
          <SvgIcon {...props}>
      <path  fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon2(props) {
    return (
        <a href="https://www.linkedin.com/in/marciaisejima/">
          <SvgIcon {...props}>
      <path  fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon3(props) {
    return (
        <a href="https://www.linkedin.com/in/tytstn/">
          <SvgIcon {...props}>
      <path  fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon4(props) {
    return (
        <a href="https://www.linkedin.com/in/merry-nguyen/">
          <SvgIcon {...props}>
      <path  fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon5(props) {
    return (
        <a href="https://www.linkedin.com/in/yukakos/">
          <SvgIcon {...props}>
      <path  fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
          </SvgIcon></a>
    );
  }


  const AboutCard = props => {
      const classes =  props.classes

      return (
          <div className={classes.root}>
             <Grid
            container
            alignItems="center"
            alignContent="space-around"
            className={classes.container}
          >
          
          <Grid item xs={12} md={12} className={classes.item1}>
              <InformationBlock
                header_2={props.header_1}
                para_1={props.para_1}
                align="center"
                
              />
            </Grid>


           <Grid item xs={12} md={12} className={classes.item2}>
              <InformationBlock
                header_2={props.header_2}
                para_1={props.para_2}
                align="center"
                
              />
            </Grid> 

            <Grid container alignItems="stretch" spacing={40} className={classes.container1}>
                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_1}
                      headerName={props.headerName_1}
                      position={props.position_1}
                      className={classes.member}
                    />
                    <LinkedinIcon1 className={classes.socialIcon}/>

                </Grid>

                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_2}
                      headerName={props.headerName_2}
                      position={props.position_2}
                      className={classes.member}
                    />
                    <LinkedinIcon2 className={classes.socialIcon}/>

                </Grid>

                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_3}
                      headerName={props.headerName_3}
                      position={props.position_3}
                      className={classes.member}
                    />
                    <LinkedinIcon3 className={classes.socialIcon}/>

                </Grid>

                <Grid container  spacing={40} className={classes.container2}>
                
                <Grid item xs={12} md={4} className={classes.member1}>

                    <Members 
                      img={props.img_4}
                      headerName={props.headerName_4}
                      position={props.position_4}
                      className={classes.member}
                    />
                    <LinkedinIcon4 className={classes.socialIcon}/>

                </Grid>

                <Grid item xs={12} md={4} className={classes.member2}>

                    <Members 
                      img={props.img_5}
                      headerName={props.headerName_5}
                      position={props.position_5}
                      

                      
                    />
                    <LinkedinIcon5 className={classes.socialIcon}/>

                </Grid>
                
                
                </Grid>


            </Grid>






            <Grid item xs={12} md={12} className={classes.item3}>
              <InformationBlock
                header_2={props.header_3}
                para_1={props.para_3}
                para_1={props.para_4}
                align="center"
                button={props.button}
              />
            </Grid> 

          
          
          
          
          
          
          
          
          </Grid> 

          </div>
      )
  }
 
  export default withStyles(styles)(AboutCard) 