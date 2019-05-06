import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    
});
  
const style =  ({
    blackLine:{
        marginLeft: '-1rem',
        padding: '.5rem',
        background: '#000',
    }
})

class title extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Grid container spacing={0} >
                <Grid item xs={12}>
                <Typography component="h2" variant="h2" >開放原始碼研究社</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography component="h2" variant="h2" >{this.props.title}</Typography>
                </Grid>
                <Grid item xs={7} style={style.blackLine}></Grid>
                <Grid item xs={5}></Grid>
            </Grid>
        );
    }
}

export default  withStyles(styles)(title);