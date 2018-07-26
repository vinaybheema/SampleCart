import React, { Component } from 'react';
import './App.css';
import  {Link}  from 'react-router-dom';
import {Router, Route, hashHistory} from 'react-router';
import Apple from './Images/Apple.jpg';
import Lenovo from './Images/Lenovo.jpg';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Notification } from 'react-notification';
import Alert from 'react-s-alert';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './Actions/actions';


class Item extends Component {
constructor(props){
  super(props);
  this.handleItemsCount = this.handleItemsCount.bind(this);
  this.state={
    itemsCount : 3
  }
}

handleItemsCount(e){
  e.preventDefault();
  var id = e.target.id;
  var items = this.state.itemsCount;
  if(items > 0){
    this.setState({itemsCount: items-1});
    this.props.actions1.GetItemIndex(id);
  }
  else
    alert('Selected item is not available for purchase');
}

  render() {

    var brand = this.props.item.Brand;
    var image;

    if(brand=="Lenovo"){
      image = <img src={Lenovo} style={{width:120, height:80, marginTop: 10}} />;
    }
    else
    {
      image = <img src={Apple} style={{width:120, height:80, marginTop: 10}} />;
    }

    var keySkills = this.props.item.keySpecs.map(function(spec){
      return (<li>{spec}</li>);
    });

    
    return (
      <div style={{display: "flex", borderBottom: "2px solid #f0f0f0"}}>
        {/* <a href="" style={{display: "flex"}}> */}
          <div style={{flex: 1}}>
            <div>{image}</div>
            <label>
              <input type="checkbox" id="chbk"/>
              <span>Add To Compare</span>
            </label>
            <div>
              <span>Items Remaining : {this.state.itemsCount}</span>
            </div>
            <div>
              <input type="button" id={this.props.item.Id} value="Add To Cart" onClick={(e)=>{this.handleItemsCount(e)}}/>
            </div>
          </div>
          <div style={{flex: 2}}>
            <div>
              <h3>{this.props.item.title}</h3>
            </div>
            <ul>
              {keySkills}
            </ul>
          </div>
        {/* </a> */}
      </div>
    );
  }
}

//export default Item;

function decrement(state, props){
  return {itemsCount : state.itemsCount-1};
}


function mapStateToProps(state, ownProps){
  return {
    itemId: state.reducer.itemIndex
  } ; 
}

function mapDispatchToProps(dispatch){
  return { actions1 : bindActionCreators(actions, dispatch)};
}

export default connect (mapStateToProps, mapDispatchToProps) (Item);