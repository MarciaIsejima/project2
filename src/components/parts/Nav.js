import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { Link, animateSrcroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom"
import {Grid} from "@material-ui/core/Grid";
// import {render} froimport {Gridm 'react-dom';


import MenuButton from  "../parts/MenuButton"

//import Logo
import LogoDesktop from "../../assets/logo_desktop.svg"
import LogoMobile from "../../assets/logo/logo_mobile.svg"

const styles = theme => ({
  root: {
    maxWidth: "75em",
    margin: "10px auto",
    display: "flex",
    "justify-content": "space-between",
    position: "sticky",
    top: 0,
    fontSize:"18px",
    

    
  },
  wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      top: "100px !important",
      left: "0",
      width: "100%",
      height: "100vh",
      
    },
    [theme.breakpoints.up("md")]: {
      display: "grid !important",
      "grid-template-columns": "auto auto",
      "align-items": "center"
    },
    width: "100%",
    
    
  },
  left: {
    "justify-self": "start",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column",
    }
  },
  right: {
    "justify-self": "end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column"
    }
  },
  link: {
    textDecoration:"none",
    [theme.breakpoints.down("sm")]: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&:.active": {
        textDecoration: theme.palette.primary.main
      },
    },
  
    margin: "0 30px",
    marginLeft:0,
    color:"black",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
      textAlign: "center"
    },
    "&:hover": {
      color: theme.palette.primary.main
    },
    "&:.active": {
      textDecoration: theme.palette.primary.main
    },
    cursor: "pointer"

  },
  button: {
    
    borderRadius: "50px",
    border: "3px solid orange",
    background: "white",
    fontWeight: "bold",
    fontSize:"16px",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "0 auto"
    },
  }, 
  logoMobile: {
   
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  logoDesktop:{
    
  
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  

})

const menus =["Recipes", "Plans", "About Us"]

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

//scrolling
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: false
//     };

//     this.handleScroll = this.handleScroll.bind(this);
// }

// handleScroll() {
//     this.setState({scroll: window.scrollY});
// }

// componentDidMount() {
//     const el = document.getElementById('navigation');
//     // this.setState({top: el.offsetTop, height: el.offsetHeight});
//     window.addEventListener('scroll', this.handleScroll);
// }

// componentDidUpdate() {

//     this.state.scroll > this.state.top ? 
//         document.body.style.paddingTop = `${this.state.height}px` :
//         document.body.style.paddingTop = 0;
//         document.body.style.backgroundColor = "white";
// }
  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>

      <NavLink exact to="/" spy={true} smooth={true} className={classes.link} offset={-136} >
        <img src={LogoDesktop} className={classes.logoDesktop} alt="selfnourish logo" width="80px" height="80px"/>
        <img src={LogoMobile} className={classes.logoMobile} alt="selfnourish logo" width="50px" height="50px"/>
        </NavLink>

        {/* <NavLink to="/Home" spy={true} smooth={true} className={classes.link} offset={-136}>
        <img src={LogoDesktop} className={classes.logoDesktop} alt="selfnourish logo" width="80px" height="80px"/>
        <img src={LogoMobile} className={classes.logoMobile} alt="selfnourish logo" width="50px" height="50px"/>
        </NavLink> */}

        <div className={classes.wrapper} id="navigation">
          <div className={classes.left} >
            {menus.map((menu,index) => {
              // console.log(menus[index])
              return (

                <NavLink
                exact to={menus[index]} spy={true} smooth={true}
                color="inherit" className={classes.link} offset={-50} key={menu}>
                {menu}
                </NavLink>
              )
             
            })}
          </div>
          <div className={classes.right}>
          <NavLink exact to='/Contact'  className={classes.link} >
            <Button
              variant="contained"
              color="white"
              className={classes.button}
              
              
            >
              Contact Us
            </Button>
            </NavLink>
          </div>
        </div>
        <MenuButton dataTarget="#navigation" />
      </div>
    )
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Nav)