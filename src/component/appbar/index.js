import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Avatar from '@material-ui/core/Avatar';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles =  ({
    bg:{
        background: 'aqua',
        display: 'block',
        height: '3rem',
    },
    nav:{
        textAlign: 'center',
        color: grey[50],
        display: 'block',
        width: '100%'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
})

class header extends Component {
    render() {
    let nav = [
        {text: '照片牆', href: '/photo'},
        {text: '行事曆', href: 'index'},
        {text: '章程', href: '/index'},
        {text: '社費報表', href: '/about'}
    ]
    let html = nav.map((arr, index) => 
        <Grid item xs={2} key={index} align="center">
            <Link to={arr.href}><ListItem button>
                <Typography style={styles.nav} align="center">
                 {arr.text}
                </Typography>
            </ListItem> </Link>
        </Grid>
    )
    return (   
            <AppBar >
                <Toolbar variant="dense">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={2} align="center">
                        <Link to="/index">
                            <Avatar alt="YuntechMark" src="/Resource/YuntechMark.svg" styles={styles.bigAvatar} />
                        </Link>
                    </Grid>
                    {html}
                    <Grid item xs={1} align="center">
                        <Link to="google.com">
                            <Avatar alt="facebook" src="/Resource/facebook.svg" styles={styles.bigAvatar} />
                        </Link>
                    </Grid>
                    <Grid item xs={1} align="center">
                        <Link to="google.com">
                            <Avatar alt="github" src="/Resource/github.svg" styles={styles.bigAvatar} />   
                        </Link>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar> 
      );
    }
  }
  
  export default withStyles(styles)(header);