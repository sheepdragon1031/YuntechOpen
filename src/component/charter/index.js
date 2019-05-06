import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Title from '../title/index';
import Tabs from '../tab/index';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
const style =  ({
    main: {
      background: "url('Resource/Top_Background.svg') center center no-repeat ",
      backgroundSize: 'cover',
      height: '100vh',
      paddingTop: '5rem',
    },
    blackLine:{
      marginLeft: '-1rem',
      padding: '.5rem',
      background: '#000',
    },
    content:{
        minHeight: '20rem'
    }
})

class calendar extends Component {
    constructor(props){
      super(props);
      this.state = {
          images: this.props.images,
          title: '章程',
          pages : [
            {
                title: '111',
                content: '111111111'},
            {
                title: '222',
                content: '222222222'},
            {
                title: '333',
                content: '333333333'},
            {
                title: '444',
                content: '444444444'}
          ]
      };
      
    }
    render() {
      const { classes } = this.props;
      return (
        <Grid container className={classes.root} style={style.main} spacing={16} 
        direction="row"
        justify="center"
        alignItems="center"  id="photo">
         <Grid container spacing={0} >
            <Title title={this.state.title}/>
            <Grid item xs={12}>
                <Tabs tab={this.state.pages} />
            </Grid>
         </Grid>
       </Grid>
      );
    }
  }

  export default withStyles(styles)(calendar);