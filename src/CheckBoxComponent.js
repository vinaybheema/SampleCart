import React, { Component } from 'react';

class CheckBoxComponent extends Component {
    constructor(props){
        super(props);
        this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
    }

    handleCheckBoxClick(e){
        var checkBoxDiv = document.getElementById("checkBox").getElementsByTagName('INPUT');
        var checkedCheckBoxes = [];
        
        for(var element of checkBoxDiv){
          if(element.checked)
            checkedCheckBoxes.push(element);
        }
        this.props.checkedCheckBoxes(checkedCheckBoxes);
      }

  render() {
    return (
        <div>
            <div>
            <label><input type="checkbox" name="myCheckbox" id="checkboxid1" onClick={this.handleCheckBoxClick}/>Core i3</label>
            </div>
            <div>
              <label><input type="checkbox" name="myCheckbox" id="checkboxid2" onClick={this.handleCheckBoxClick}/>Core i5</label>
            </div>
            <div>
              <label><input type="checkbox" name="myCheckbox" id="checkboxid3" onClick={this.handleCheckBoxClick}/>Core i7</label>
            </div>
            <div>
              <label><input type="checkbox" name="myCheckbox" id="checkboxid4" onClick={this.handleCheckBoxClick}/>Dual Core</label>
            </div>
            <div>
              <label><input type="checkbox" name="myCheckbox" id="checkboxid5" onClick={this.handleCheckBoxClick}/>Quad Core</label>
              </div>
        </div>
    );
  }
}

export default CheckBoxComponent;
