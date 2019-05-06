import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Title from '../title/index';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
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
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
})

class calendar extends Component {
    constructor(props){
      super(props);
      this.state = {
          images: this.props.images,
          title: '養老院',
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
          ],
          image:[
            {src: 'https://i.imgur.com/RxtfmyY.jpg' },
            {src: 'https://i.imgur.com/rfGXSWo.jpg' },
            {src: 'https://i.imgur.com/jsH5pjS.jpg' },
            {src: 'https://i.imgur.com/aBWDLVS.jpg' },
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
         <Grid container spacing={16} >
            <Title title={this.state.title}/>
              <Grid item xs={12} style={{paddingTop: '1rem'}}>
                  <Typography component="h3" variant="h3" style={{fontWeight: 300}}>開放原始碼研究社</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h3" variant="h3" style={{fontWeight: 300}} >養老院 2樓</Typography>
              </Grid>
                <Grid item xs={5} style={style.blackLine}></Grid>
                <Grid item xs={7}></Grid>
                {this.state.image.map((index,val)=>{
                  return (
                    <Grid item xs={3} key={'media'+val}>
                      <Card>
                        <CardMedia
                        style={style.media}
                        image={index.src}
                        title={`養老院`+val+'.jpg'} />
                      </Card>
                    </Grid>
                  )
                })}
          </Grid>
       </Grid>
      );
    }
  }

  export default withStyles(styles)(calendar);