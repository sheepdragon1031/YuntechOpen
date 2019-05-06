import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './index.css';

const styles = ({
  logo:{
    height: '40vh'
  }
})

class header extends Component {
    
    render() {
      return (
             <div className='headerBG' id="index">
              <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure" >
                <Grid container spacing={0} 
                      direction="row"
                      justify="space-between"
                      className="headerGD">
                      <Grid item xs={12}>
                         <img style={styles.logo} src="/Resource/YunOSC_Hat.svg"/>
                      </Grid>
                      <Grid container spacing={0} >
                          <Grid item xs={12}>
                            <Typography component="h2" variant="h2" >雲科</Typography>
                          </Grid>
                          <Grid item xs={10}>
                            <Typography component="h2" variant="h2" >開放原始碼研究社</Typography>
                          </Grid>
                          <Grid item xs={2}>
                            <Typography component="h5" variant="h5" align="right" >2nd</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography component="h5" variant="h5" >Yuntech</Typography>
                          </Grid>
                      </Grid>
                  </Grid>
                  
              </Parallax>
            </div>
      );
    }
  }
  
  export default withStyles(styles)(header);