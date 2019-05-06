import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Index from './component/index/index';
import AppBar from './component/appbar/index';
import Photo from './component/photo/index';
import Calendar from './component/calendar/index';
import report from './component/report/index';
import Charter from './component/charter/index';
import NursingHome from './component/nursingHome/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = ({
  boxs: {
      height: '100rem',
    },
    test: {
      position: 'relative'
    },
    root:{
      width: 'calc(100% + 8px)',
    }
})
class App extends Component {
  render() {
    return (
      <div style={styles.root}>
          <Router>
            <ParallaxProvider >
            <AppBar />
            <Route path="/index" component={Index} />
            <Route path="/photo" component={Photo} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/charter" component={Charter} />
            <Route path="/report" component={report} />
            <Route path="/nursingHome" component={NursingHome} />
            </ParallaxProvider>
          </Router>  
                     
             {/* <div className="boxs" style={styles.boxs}></div> */}
          
      </div>
    );
  }
}

export default withStyles(styles)(App);
