import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  });
  
const style =  ({
    body:{
        maxWidth: '80rem' ,
        margin: 'auto'
    },
    main: {
      minHeight: '90vh',
      padding: '1rem',
    },
    topTitle:{
        lineheight: '5rem',
        paddingTop: '3rem',
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
    grid:{
        maxWidth: '100px'
    }
})

class about extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
        { name: 'PHP',
            image: "http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/github-bartzaalberg-php-tester-icon.png",
            text:[
                '寫過幾個laravel網站',
                '寫過CodeIgniter',
                '土炮寫過網站',
            ],},
        { name: 'JS',
            image: "http://dimitridessus.fr/assets/img/skills/frameworks/node-js.svg",
            text:[
                '使用過React、Vue',
                '熟悉使用Jquery套件',
                '熟悉使用ES5、會用ES6語法',
            ]},
        { name: 'HTML5',
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png?1553847833189",
          text:[
            '瞭解 HTML5 標籤使用規則',
            '熟悉 CSS 選擇器、Flex特性',
            '製作過RWD頁面',
            ]
        }
      ]
      let html = Language.map((arr, index) => 
            <Grid item xs={12}  sm={4}　key={index} className={classes.grid}>
                <Paper className={classes.paper}>
                    <Grid container justify="center" >
                        <Avatar alt="codeimg" src={arr.image} style={style.icon} />
                    </Grid>
                    <Grid container justify="center" >
                        <Typography variant="headline" align="center">
                            {arr.name}         
                        </Typography>
                    </Grid>
                    <Grid container spacing={16}>
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
        <div style={style.body} >
        <Grid container className={classes.root} style={style.main} spacing={16}  id="tool"
            direction="row"
            justify="center"
            alignItems="flex-start">
                <Grid item xs={12} >
                    <Typography variant="display1" align="center" style={ style.title}>
                            
                        </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="display2" align="center" style={ style.topTitle}>
                            主要使用的語言      
                        </Typography>
                </Grid>
                {html}
        </Grid>
        </div>
      );
    }
  }
  
  export default withStyles(styles)(about);