import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });
  
const style =  ({
    myhead:{
        width: '10rem',
        height: '10rem',
        margin: '1rem',
    },
    Hgrid:{
        height: 'auto',
    },
    paper:{
      padding: '2rem'
    },
    title:{
      lineHeight: '3rem',
    },
    main: {
      background: "url('https://i.imgur.com/LiMgFIa.jpg') center center no-repeat ",
      // https://i.imgur.com/bTIbBnY.jpg
      backgroundSize: 'cover',
      height: '90vh',
    }
})

class about extends Component {
    
    render() {
      const { classes } = this.props;
      return (
        <Grid container className={classes.root} style={style.main} spacing={16} 
        direction="row"
        justify="center"
        alignItems="center"  id="photo">
          
       </Grid>
      );
    }
  }
  
  export default withStyles(styles)(about);