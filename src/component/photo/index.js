import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Gallery from "react-photo-gallery";

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
      background: "url('Resource/Top_Background.svg') center center no-repeat ",
      backgroundSize: 'cover',
      height: '100vh',
      paddingTop: '5rem',
    }
})

class about extends Component {
    
    render() {
      const { classes } = this.props;
      let imgs = [];
      for(let i = 1; i < 29 ; i++){
        imgs[i -1] = {
          src: `Resource/photo/P${i}.png`,
          width: Math.floor(Math.random() * 2),
          height: Math.floor(Math.random() * 2),
          sizes: ["(min-width: 480px) 5vw,(min-width: 1024px) 20vw"],
        }
      }
      const photos = imgs;
          return (
        <Grid container className={classes.root} style={style.main} spacing={16} 
        direction="row"
        justify="top"
        alignItems="center"  id="photo">
         <Grid container spacing={0} >
            <Grid item xs={12}>
              <Typography component="h2" variant="h2" >開放原始碼研究社</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="h2" variant="h2" >照片牆</Typography>
            </Grid>
            <Grid item xs={12}>
              <Gallery photos={photos} />
            </Grid>
         </Grid>
       </Grid>
      );
    }
  }
  
  export default withStyles(styles)(about);