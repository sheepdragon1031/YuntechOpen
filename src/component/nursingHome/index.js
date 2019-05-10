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
      padding: '6rem 1rem',
    },
    blackLine:{
      marginLeft: '-1rem',
      padding: '.5rem',
      background: '#333',
    },
    content:{
        minHeight: '20rem'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    maxpage:{
      
    }
})

class calendar extends Component {
    constructor(props){
      super(props);
      this.state = {
          title: '養老院',
          image:[
            {src: 'https://i.imgur.com/RxtfmyY.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/rfGXSWo.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/jsH5pjS.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/aBWDLVS.jpg', title: "養老院" },
          ],
          images:[
            {src: 'https://i.imgur.com/RxtfmyY.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/rfGXSWo.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/jsH5pjS.jpg', title: "養老院" },
            {src: 'https://i.imgur.com/aBWDLVS.jpg', title: "養老院" },
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
                    <Grid item xs={3} key={'media'+val} style={style.maxpage}>
                      <Card>
                        <CardMedia
                        style={style.media}
                        image={index.src}
                        title={`養老院`+val+'.jpg'} />
                      </Card>
                      <Typography component="title" variant="title" >{index.title}</Typography>
                    </Grid>
                  )
                })}
              <Grid item xs={12} style={{paddingTop: '1rem'}}>
                <Typography component="h3" variant="h3" style={{fontWeight: 300}}>開放原始碼研究社</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography component="h3" variant="h3" style={{fontWeight: 300}} >養老院 1樓</Typography>
              </Grid>
              <Grid item xs={5} style={style.blackLine}></Grid>
              <Grid item xs={7}></Grid>
              {this.state.images.map((index,val)=>{
                return (
                  <Grid item xs={3} key={'media'+val} style={style.maxpage}>
                    <Card>
                      <CardMedia
                      style={style.media}
                      image={index.src}
                      title={`養老院`+val+'.jpg'} />
                    </Card>
                    <Typography component="title" variant="title" >{index.title}</Typography>
                  </Grid>
                )
              })}
          </Grid>
       </Grid>
      );
    }
  }

  export default withStyles(styles)(calendar);