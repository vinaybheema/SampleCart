import React, { Component } from 'react';
import  {Link}  from 'react-router-dom';
import {Router, Route, hashHistory} from 'react-router';
//import ItemsComponent from './ItemsComponent';
import Item from './Item'
import CheckBoxComponent from './CheckBoxComponent';

class Home extends Component {
  constructor(props){
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckedCheckBoxes = this.handleCheckedCheckBoxes.bind(this);
    this.state={
      laptops: this.props.laptops,
      laptopsCount: this.props.laptops.length
    };
  }

  handleTextChange(e) {
    
    this.setState({textInput: e.target.value});
    var items = this.props.laptops;
    
    var newListOfLaptops = items.filter(function(lap){
      if(lap.Brand.toUpperCase().includes(e.target.value.toUpperCase())){
        return lap;
      }
    });
    var checkBoxDiv = document.getElementById("checkBox").getElementsByTagName('INPUT');
    
    for(var element of checkBoxDiv){
      element.checked = false;
    }
    this.setState({laptops: newListOfLaptops});
    this.setState({laptopsCount: newListOfLaptops.length});
  }

  handleCheckedCheckBoxes(checkBoxes){
    var text = this.refs.searchText.value;
    var searchedLaptops = this.props.laptops.filter(function(lap){
      if(lap.Brand.toUpperCase().includes(text.toUpperCase())){
        return lap;
      }
    });
    
    var filteredLaptops = [];
    checkBoxes.forEach(getListOfCheckBoxes, this);
    function getListOfCheckBoxes(checkBox){
      searchedLaptops.forEach(function(lap){
        lap.keySpecs.forEach(function(spec){
          if(spec.toUpperCase().includes(checkBox.parentNode.innerText.toUpperCase())){
            if(!filteredLaptops.includes(lap))
              filteredLaptops.push(lap);
          }
            
        });
          // if(lap.keySpecs.contains(checkBox.parentNode.innerText.toUpperCase())){
          //   filteredLaptops.push(lap);
          // };
        });
    }
    if(checkBoxes.length == 0)
      filteredLaptops = searchedLaptops;

    this.setState({laptops: filteredLaptops});
    this.setState({laptopsCount: filteredLaptops.length});
  }



  render() {

    var Items = this.state.laptops.map(laptop=>{
    return (<Item item={laptop}/>);
    })

    return (
      <div>
        <div style={{borderBottom: "2px solid #f0f0f0", textAlign: "center", paddingBottom: 10}}>
          <h1>Home</h1>
          <input type='text' value={this.state.textInput} onChange={this.handleTextChange} ref='searchText'/>
          <div style={{paddingTop: 10}}>
            <span>Items On Page : {this.state.laptopsCount}</span>
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div id="checkBox" style={{flex: 1, borderRight: "2px solid #f0f0f0"}}>
            <CheckBoxComponent laptops={this.state.laptops} checkedCheckBoxes={this.handleCheckedCheckBoxes}/>
          </div>
          <div style={{flex: 4, marginLeft: 10}}>
            {/* <a href="" style={{textDecorationLine: "none", color:"black"}}> */}
              {Items}
            {/* </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
