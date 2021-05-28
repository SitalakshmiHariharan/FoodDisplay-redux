import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import DisplayItems from '../component/displayItems';

class App extends Component{

    componentDidMount(){
        console.log("Inside CDM")
        {this.props.foodItemsAction();}
    }

    render(){
        return(            
            <div> 
            <DisplayItems dataList= {this.props.finalState}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("Inside MSTP")
    return({
        finalState:state.food
    })
 }

 export default connect(mapStateToProps,actions)(App);
