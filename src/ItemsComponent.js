import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  {Link}  from 'react-router-dom';
import {Router, Route, hashHistory} from 'react-router';

class ItemsComponent extends Component {
  render() {
    return (
      <div className="App">
        <h1>ItemsComponent</h1>
      </div>
    );
  }
}

export default ItemsComponent;
