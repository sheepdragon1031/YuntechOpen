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
        background: 'rgba(0,0,0,0.8)',
    },
    title:{
        textShadow: '0rem 0rem 1px #565656 , 0rem 0rem 3px #565656',
    },
    titles:{
        display: 'inline-block',
        width: '50%',
        paddingBottom: '1rem',
        paddingLeft: '1rem',
        borderBottom: '1rem solid',
        textShadow: '0rem 0rem 1px #565656 , 0rem 0rem 3px #565656',
    }
})

class title extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Grid container spacing={16} style={{paddingBottom: '1rem'}} >
                <Grid item xs={12}>
                <Typography component="h2" variant="h2" style={style.title} >開放原始碼研究社</Typography>
                </Grid>
                <Grid item xs={12} style={{marginLeft: '-1rem'}}>
                <Typography component="h2" variant="h2" style={style.titles} >{this.props.title}</Typography>
                </Grid>
            </Grid>
        );
    }
}

export default  withStyles(styles)(title);