import React, { Component } from 'react';
import './App.css';
import  {Link}  from 'react-router-dom';
import {Router, Route, hashHistory} from 'react-router';
import {connect} from 'react-redux';

class Cart extends Component {
  render() {
    return (
      <div className="App">
      {alert(this.props.itemId)}
        <h1>Cart Items</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    itemId: state.reducer.itemIndex
  } ; 
}

export default connect (mapStateToProps,null) (Cart);

