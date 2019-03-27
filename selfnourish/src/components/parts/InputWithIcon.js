import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import './RecipeList.css'; 

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

function InputWithIcon(props) {
  const { classes } = props;

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon path={mdiMagnify} size={1.5} color={"grey"}/>
            </InputAdornment>

          }
          label="Enter ingredient"
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Enter ingredient"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon path={mdiMagnify} size={1.5} color={"grey"}/>
            </InputAdornment>
          ),
        }}
      />

      <div className={classes.margin}>
        <Grid container spacing={8} alignItems="flex-end">
          <Grid item>
            <Icon path={mdiMagnify} size={1.5} rotate={90} color={"grey"}/>
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Enter ingredient" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

InputWithIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);