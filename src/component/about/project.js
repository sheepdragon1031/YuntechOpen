import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    card: {
        color: theme.palette.text.secondary,
    },
    media:{
        width: 'auto',
        height: 'auto'
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
      background: green[700],
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
        margin: 'auto',
    },
    CardBN:{
        textAlign: 'right'
    }
})

class frame extends Component {
    
    render() {
      const { classes } = this.props;
      let Language = [
        { name: '台灣健康促進科技協會', image: "https://i.imgur.com/RkcjYHC.png",
        URL: 'https://tahpt.org/',
        text:[
            '使用laravel MVC、RWD架構',
            '負責全端開發、前端版型與後端程式',
            '管理員修改、刪除資料等功能'
        ],
        },
        { name: '台灣生物力學學會', image: "https://i.imgur.com/21xKd1h.png",
        URL:'https://www.1993tsb.org',
        text:[
            '使用CodeIgniter',
            '負責新增網站報名系統',
            '部分後端系統等功能',
        ],},
        { name: '億峯娛樂團隊', image: "https://i.imgur.com/ZKNGKJb.png",
        URL:'https://2018yifeng.com',
        text:[
            '使用laravel MVC、RWD架構',
            '負責全端開發、前端版型與後端程式',
            '會員註冊報名等功能'
        ],
        },
        { name: '康美美容化妝品', image: "https://i.imgur.com/rcMRIA3.png",
        URL: null,
        text:[
            '使用Vue.JS前端',
            '負責前端RWD、素材處理',
            '版面已完成但未上線'
        ],
        }
      ]
      let html = Language.map((arr, index) => 
            <Grid item xs={12} sm={12} key={index}>
                <Card className={classes.card}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={arr.name}
                        className={classes.media}
                        image={arr.image}
                        title={arr.name+`網站截圖`}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {arr.name}
                        </Typography>
                        {
                                arr.text.map((arrs, indexs) => 
                                    <Typography component="p"  key={indexs}>
                                        {arrs}
                                    </Typography>
                                )
                            }
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        >
                        <Grid item xs={12} style={style.CardBN} >
                            {arr.URL? (
                                <Button  color="primary" href={arr.URL} target="_blank">
                                    前往
                                </Button>
                            ):(
                                <Button  color="primary">
                                    未上線
                                </Button>
                            )}
                            
                        </Grid>
                    </Grid>
                        
                    </CardActions>
                </Card>
            </Grid>
      )
      return (
        <div className={classes.root} style={style.body} id="project">
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
                        專案作品   
                        </Typography>
                    </Grid>
                    {html}
            </Grid>
       </div>
      );
    }
  }
  
  export default withStyles(styles)(frame);