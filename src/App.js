import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import Index from './component/index/index';
import AppBar from './component/appbar/index';
import Photo from './component/photo/index';
import About from './component/about/index';
import Tool from './component/about/tool';
import Frame from './component/about/frame';
import Project from './component/about/project';
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
            </ParallaxProvider>
          </Router>  
          

          
          {/* <About/>
          <Tool />
          <Frame /> 
          <Project /> */}
                     
             {/* <div className="boxs" style={styles.boxs}></div> */}
          
      </div>
    );
  }
}

export default withStyles(styles)(App);
