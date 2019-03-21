import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeCard extends React.Component {
  state = { 
		expanded: false,
		selectedRecipeId: ''
	};

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
	
  };

  handleClickRecipe = () => {

		this.props.retrieveRecipe(this.props.recipe.id);
  };

  render() {

    const { classes } = this.props;
    
    //changes the image URL to load a better resolution image
    var imageOriginalUrl = this.props.recipe.imageUrlsBySize[90]
    var image180Url = imageOriginalUrl.replace("=s90-c", "=s360-c");

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.handleClickRecipe}>

            <CardMedia
              className={classes.media}
              image={image180Url}
              title={this.props.recipe.recipeName}
            />
            
            <CardContent>
              <Typography component="p">
                {this.props.recipe.recipeName}
              </Typography>
              <Typography component="p">
                by {this.props.recipe.sourceDisplayName}
              </Typography>
            </CardContent>

        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton onClick={this.handleExpandClick} aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={this.handleExpandClick} aria-label="Share">
            <ShareIcon />
          </IconButton>
          <div className="recipe-rating">
            {this.props.recipe.rating}
            <StarIcon/>
          </div>

        </CardActions>
 
      </Card>
    );
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);