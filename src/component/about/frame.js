import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';


const styles = theme => ({
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
      },
  });
  
const style =  ({
    body:{
        maxWidth: '80rem' ,
        margin: 'auto'
    },
    main: {
      minHeight: '90vh',
      background: blue[700],
      padding: '1rem',
    },
    topTitle:{
        lineheight: '5rem',
        paddingTop: '3rem',
        color: grey[50]
    },
    title:{
        lineheight: '5rem',
        paddingTop: '1rem',
    },
    icon:{
        width: '10rem',
        height: '10rem',
        margin: '1rem',
    },
})

class frame extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
        { name: 'Laravel', image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png",
        text:[
            '熟悉laravel MVC架構',
            '使用MongoDB作資料庫'
        ],
        },
        { name: 'React', image: "https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg",
        text:[
            '前端主要用React',
            '也用過Vue.JS',
        ],},
        { name: 'Material', image: "https://material.io/tools/icons/static/ic_material_192px_light.svg",
        text:[
            '前端以Material為主','稍微用過Bootstrap',
        ],
        }
      ]
      let html = Language.map((arr, index) => 
            <Grid item xs={12} sm={4} key={index}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" >
                        <Avatar alt="codeimg" src={arr.image} style={style.icon} />
                    </Grid>
                    <Grid container justify="center" >
                        <Typography variant="headline" align="center">
                            {arr.name}         
                        </Typography>
                    </Grid>
                    <Grid container spacing={16} >
                    {
                        arr.text.map((arrs, indexs) => 
                            <Grid item xs={12} key={indexs}>
                                <Typography variant="body1" align="center">{arrs}</Typography>
                            </Grid>
                        )
                    }
                    </Grid>
                </Paper>
            </Grid>
      )
      return (
        <div className={classes.root} style={style.body} id="frame">
            <Grid container className={classes.root} style={style.main} spacing={16} 
                direction="row"
                justify="center"
                alignItems="flex-start">
                    <Grid item xs={12} >
                    <Typography variant="display1" align="center" style={ style.title}>
                              
                        </Typography>
                    </Grid>
                    <Grid item xs={12} >
                    <Typography variant="display2" align="center" style={ style.topTitle}>
                        會用的框架    
                        </Typography>
                    </Grid>
                    {html}
            </Grid>
       </div>
      );
    }
  }
  
  export default withStyles(styles)(frame);