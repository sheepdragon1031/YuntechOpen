import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Avatar from '@material-ui/core/Avatar';

import { Link } from "react-router-dom";


const styles =  ({
    bg:{
        background: 'aqua',
        display: 'block',
        height: '3rem',
    },
    nav:{
        textAlign: 'center',
        color: grey[800],
        display: 'block',
        width: '100%',
        textDecoration: 'none'
    },
    bigAvatar: {
        margin: 10,
        width: 30,
        height: 30,
        pagging: 5,
      },
    AppBar: {
        backgroundColor: 'rgba(0,0,0,0)',
       // background: "url('Resource/Top_Background.svg') top center no-repeat ",
        backgroundSize: '100%',
        boxShadow: 'none',
    },
})

class header extends Component {
    render() {
    let nav = [
        {text: '照片牆', href: '/photo'},
        {text: '行事曆', href: '/calendar'},
        {text: '章程', href: '/charter'},
        {text: '社費報表', href: '/report'},
        {text: '養老院', href: '/NursingHome'}
    ]
    let html = nav.map((arr, index) => 
        <Grid item xs={2} key={index} align="center">
            <Link to={arr.href} style={{textDecoration: 'none'}}>
                <ListItem button>
                    <Typography style={styles.nav} align="center">
                    {arr.text}
                    </Typography>
                </ListItem>
             </Link>
        </Grid>
    )
    return (   
            <AppBar style={styles.AppBar} position="absolute">
                <Toolbar >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={1} align="center">
                        <Link to="/index">
                            <Avatar alt="YuntechMark" src="/Resource/YuntechMark.svg" style={styles.bigAvatar} />
                        </Link>
                    </Grid>
                    {html}
                    <Grid item xs={1} align="center">
                        <Grid container>
                            <Grid item xs={6} align="center">
                                <Link to="https://facebook.com">
                                    <Avatar alt="facebook" src="/Resource/facebook.svg" style={styles.bigAvatar} />
                                </Link>
                            </Grid>
                            <Grid item xs={6} align="center">
                                <Link to="https://google.com">
                                    <Avatar alt="github" src="/Resource/github.svg" style={styles.bigAvatar} />   
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                </Toolbar>
            </AppBar> 
      );
    }
  }
  
  export default withStyles(styles)(header);