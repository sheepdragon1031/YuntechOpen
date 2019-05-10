import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Gallery from 'react-grid-gallery';
import PropTypes from 'prop-types';
import Title from '../title/index'
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
      padding: '6rem 1rem',
    },
    blackLine:{
      marginLeft: '-1rem',
      padding: '.5rem',
      background: '#000',
    }
})


class about extends Component {
    constructor(props){
      super(props);
      this.state = {
          images: this.props.images,
          page: '照片牆'
      };
      for(let i = 0; i < 27 ; i++){
        this.props.images[i] = {
          src: `Resource/photo/P${i + 1}.png`,
          thumbnail: `Resource/photo/P${i + 1}.png`,
          thumbnailWidth: 320,
          thumbnailHeight: 174,
        }
      }
    }
    render() {
      const { classes } = this.props;
      return (
        <Grid container className={classes.root} style={style.main} spacing={16} 
        direction="row"
        justify="center"
        alignItems="center"  id="photo">
         <Grid container spacing={0} >
            <Title title={this.state.page}/>
            <Grid item xs={12} >
              <Gallery images={this.state.images} enableImageSelection={false}/>
            </Grid>
         </Grid>
       </Grid>
      );
    }
  }

  about.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired
        })
    ).isRequired
  };
  about.defaultProps ={
    images: ([
    ])
  }
  export default withStyles(styles)(about);