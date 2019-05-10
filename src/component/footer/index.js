import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
    
});
  
const style =  ({
    footer:{
        padding: '2rem 0',
        background: grey[600],
    },
    text:{
        color: '#FFF',
    },
    zeroOne:{
        background: "url('Resource/PageBorder.png') center center no-repeat ",
        height: '5rem',
        backgroundSize: '125%',
        marginTop: '-7rem',
        boxShadow: '0rem 3rem 5rem #e6e6e6 inset',
    }
})

class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Grid container spacing={0}  style={style.footer}>
                <Grid item xs={12} style={style.zeroOne}></Grid>
                <Grid item xs={12}>
                <Typography style={style.text}  variant="title" align="center" color="textSecondary" >Copyright Yuntech Opensource club</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default  withStyles(styles)(footer);