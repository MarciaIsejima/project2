import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

const styles = theme => ({
  img: {
    display: "block",
    width: "30%",
    margin: "30px auto 20px auto"
  },

  header_1:{
      fontSize:"32px"
  }

})

const InformationBlock = props => {
  const classes = props.classes
  const { header_1, header_2, header_3, headline, img, header_align, alt, para_1, para_2 } = props
  return (
    <div className={props.className}>
      {header_1 && (
        <Typography component="h1" variant="h1" align={header_align}>
          {header_1}
        </Typography>
      )}
      {header_2 && (
        <Typography
          component="h2"
          variant="h2"
          color="#000000"
          align={header_align}
        >
          {header_2}
        </Typography>
      )}
      {header_3 && (
          <Typography
            component="h3"
            variant="h3"
            color="#000000"
          >
            {header_3}
          </Typography>
      )}

      {headline && (
        <Typography 
          component="headline"
          variant="headline"
          color="#000000"
          
        
        >
          {headline}
        </Typography>
      )}

      {img && <img className={classes.img} src={Object.values(img)} alt={alt} />}
      {para_1 && (
        <Typography
          variant="body1"
          className={classes.para}
          align={props.align}
        >{para_1}
        </Typography>
      )}

    {para_2 && (
        <Typography
          variant="body2"
          className={classes.para}
          align={props.align}
        >{para_2}
        </Typography>
      )}
    </div>
  )
}

export default withStyles(styles)(InformationBlock)