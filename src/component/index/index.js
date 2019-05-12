import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import './index.css';

const styles = ({
  logo:{
    height: '40vh'
  },
  content:{
    padding: '1rem 1rem',
  },
  media: {
    height: 0,
    marginTop: '1rem',
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
  },
  card:{
    background: 'rgba(0,0,0,0)',
    boxShadow: 'none',
  },
})

class header extends Component {
    
    render() {
      return (
             <div>
                <div className='headerBG' id="index">
                <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure" >
                  <Grid container spacing={0} 
                        direction="row"
                        justify="space-between"
                        className="headerGD">
                        <Grid item xs={12}>
                          <img style={styles.logo} src="/Resource/YunOSC_Hat.svg" alt="YunOSC_Hat.svg"/>
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
                
                <Grid container spacing={0}  className='headerBG' style={{background:'#e6e6e6'}}
                    direction="row"
                    justify="space-between">
                    <Grid item xs={12}  className='index-bar' ></Grid>
                    <Grid item xs={12}>
                      <Typography component="h4" variant="h4" >你是誰?你從哪裡來?你要去哪裡?</Typography>
                    </Grid>
                    <Grid item xs={6} style={styles.content}>
                        <Typography component="h5" variant="h5" >開放原始碼研究社是雲科大的社團</Typography>
                        <Typography component="h5" variant="h5" >由一拳喜愛程式設計的朋友所建立</Typography>
                        <Typography component="h5" variant="h5" >目的是雲科大的資訊人能夠有一個團聚的地方</Typography>
                        <Typography component="h5" variant="h5" >對我們有興趣嗎?</Typography>
                        <Typography component="h5" variant="h5" >歡迎在Facebook跟隨我們的足跡</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                          <CardMedia
                          style={styles.media}
                          image={`/Resource/front.jpg`}
                          title={`front.jpg`} />
                        </Card>
                    </Grid>
                </Grid>
                
                <Grid container spacing={16}  className='headerBG'  style={{background:'#e6e6e6'}}
                    direction="row"
                    justify="space-between">
                    <Grid item xs={12} className='index-bar' ></Grid>
                    <Grid item xs={12}>
                      <Typography component="h4" variant="h4" align="center" >我們在幹嘛</Typography>
                    </Grid>
                    <Grid item xs={3}>
                          <Card style={styles.card}>
                          <CardMedia
                          style={styles.media}
                          image={`/Resource/038-laptop.svg`}
                          title={`038-laptop.svg`} />
                          <CardContent>
                            <Typography component="h5" variant="h5" >開源設課</Typography>
                            <Typography variant="body1" >開源社提供主題是的社團活動</Typography>
                            <Typography variant="body1" >幫助增廣見聞</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                          <Card style={styles.card}>
                          <CardMedia
                          style={styles.media}
                          image={`/Resource/026-trophy.svg`}
                          title={`038-laptop.svg`} />
                          <CardContent>
                            <Typography component="h5" variant="h5" >參與比賽</Typography>
                            <Typography  variant="body1" >一起手牽手出去比賽</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                          <Card style={styles.card}>
                          <CardMedia
                          style={styles.media}
                          image={`/Resource/049-studying.svg`}
                          title={`038-laptop.svg`} />
                          <CardContent>
                            <Typography component="h5" variant="h5" >讀書會</Typography>
                            <Typography  variant="body1" >一起寫程式一起成長吧</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                          <Card style={styles.card}>
                          <CardMedia
                          style={styles.media}
                          image={`/Resource/029-speech.svg`}
                          title={`038-laptop.svg`} />
                          <CardContent>
                            <Typography component="h5" variant="h5" >Lighting Talk</Typography>
                            <Typography  variant="body1" >上台和大家分享</Typography>
                            <Typography  variant="body1" >你的Project或經歷！</Typography>
                          </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="title" variant="title" >Hint:詳細活動請參閱Facebook粉絲團和社團</Typography>
                    </Grid>
                </Grid>
             </div>   
      );
    }
  }
  
  export default withStyles(styles)(header);