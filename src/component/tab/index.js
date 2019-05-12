import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    
});
  
const style =  ({
    content:{
        minHeight: '20rem'
    }
})
let TabContainer = (props) => {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

TabContainer.propTypes = {
children: PropTypes.node.isRequired,
};
class tab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0,
         };
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    render() {
        const { value } = this.state;
        const { tab } = this.props;
        
        return (
            <div style={{padding: '1rem 5rem'}}>
            <AppBar position="static" color="default">
            <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
            >
                {tab.map((index,value) =>{
                    return <Tab label={index.title} key={`tab`+value}/>
                })}
                
            </Tabs>
            </AppBar>
            {tab.map((index,val) =>{
                if(value === val){
                    return (
                        <Paper style={style.content}  key={`tabs`+val}>
                        <TabContainer >
                            {index.content.map((indexs,vals) =>{
                                return (
                                    <div key={`tab-div`+ vals}>
                                        {indexs}
                                    </div>
                                )
                            })}
                        </TabContainer>
                        </Paper>)
                }
                return false
            })}
            </div>
        );
    }
}

export default withStyles(styles)(tab);