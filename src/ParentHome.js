import React, { Component } from 'react';
import Home from './Home';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import header from './App.css';

class ParentHome extends Component {
    constructor(){
        super();
        this.state={laptops : [{
                    Id:1,
                    "Brand":"HP",
                    "title": "HP Imprint Core i3 6th Gen - (4 GB/1 TB HDD/DOS) 15-BS542TU Laptop",
                    "keySpecs":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:2,
                    "Brand":"HP",
                    "title": "HP 15 Core i5 8th Gen - (8 GB/1 TB HDD/DOS) 15-BS145TU Laptop",
                    "keySpecs":["Intel Core i5 Processor (8th Gen)","8 GB DDR4 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:3,
                    "Brand":"Lenovo",
                    "title":"Lenovo Ideapad Core i5 7th Gen - (8 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320 Laptop",
                    "keySpecs":["Pre-installed Genuine Windows 10 Operating System (Includes Built-in Security, Free Automated Updates, Latest Features)","Intel Core i5 Processor (7th Gen)","8 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:4,
                    "Brand":"HP",
                    "title":"HP 15 Pentium Quad Core - (4 GB/1 TB HDD/DOS) 15Q-BU009TU Laptop",
                    "keySpecs":["Intel Pentium Quad Core Processor","4 GB DDR3 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:5,
                    "Brand":"Dell",
                    "title":"Dell Inspiron Core i3 6th Gen - (4 GB/1 TB HDD/Linux) 3467 Laptop",
                    "keySpecs":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","Linux/Ubuntu Operating System","1 TB HDD","14 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:6,
                    "Brand":"Dell",
                    "title":"Dell Inspiron 14 3000 Core i3 6th Gen - (4 GB/1 TB HDD/Windows 10 Home) 3467 Laptop",
                    "keySpecs":["Latest Laptop without Optical Disk Drive","Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","14 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:7,
                    "Brand":"Dell",
                    "title":"Dell Inspiron Core i3 6th Gen - (4 GB/1 TB HDD/Linux) 5567 Laptop",
                    "keySpecs":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","Linux/Ubuntu Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:8,
                    "Brand":"HP",
                    "title":"HP APU Dual Core A9 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) 15q-by002AX Laptop",
                    "keySpecs":["Pre-installed Genuine Windows 10 Operating System (Includes Built-in Security, Free Automated Updates, Latest Features)","AMD APU Dual Core A9 Processor (7th Gen)","4 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:9,
                    "Brand":"Asus",
                    "title":"Asus FX503 Core i7 7th Gen - (8 GB/1 TB HDD/Windows 10 Home/4 GB Graphics) FX503VD-DM111T Gaming Laptop",
                    "keySpecs":["NVIDIA Geforce GTX 1050 for Desktop Level Performance","A High Capacity Battery Ensures Stay Productive and Entertained Throughout the Day","Powered by ICEpower Technology which Delivers Truly Immersive Listening and Gaming Experiences","Additional Fan Overboost Function Maximizes Cooling Efficiency","Pre-installed Genuine Windows 10 Operating System (Includes Built-in Security, Free Automated Updates, Latest Features)","Intel Core i7 Processor (7th Gen)","8 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:10,
                    "Brand":"HP",
                    "title":"HP 15 Core i3 6th Gen - (4 GB/1 TB HDD/Windows 10 Home) 15Q-bu013TU Laptop",
                    "keySpecs":["Pre-installed Genuine Windows 10 Operating System (Includes Built-in Security, Free Automated Updates, Latest Features)","Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:11,
                    "Brand":"HP",
                    "title":"HP 15 Core i3 6th Gen - (4 GB/1 TB HDD/DOS) 15Q-BU007TU Laptop",
                    "keySpecs":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:12,
                    "Brand":"Acer",
                    "title":"Acer Aspire 3 Celeron Dual Core - (2 GB/500 GB HDD/Linux) A315-31 Laptop",
                    "keySpecs":["Intel Celeron Dual Core Processor","2 GB DDR3 RAM","Linux/Ubuntu Operating System","500 GB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:13,
                    "Brand":"HP",
                    "title":"HP 15 Core i5 8th Gen - (8 GB/1 TB HDD/DOS) 15-BS145TU Laptop",
                    "keySpecs":["Intel Celeron Dual Core Processor","2 GB DDR3 RAM","Linux/Ubuntu Operating System","500 GB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:14,
                    "Brand":"Dell",
                    "title":"Dell Vostro 15 3000 Core i5 8th Gen - (8 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) 3578 Laptop",
                    "keySpecs":["Intel Core i5 Processor (8th Gen)","8 GB DDR4 RAM","64 bit Windows 10 Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:15,
                    "Brand":"HP",
                    "title":"HP 15 Core i3 6th Gen - (8 GB/1 TB HDD/DOS) 15Q-BU006TU Laptop",
                    "keySpecs":["Intel Core i3 Processor (6th Gen)","8 GB DDR4 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                },
                {
                    Id:16,
                    "Brand":"Dell",
                    "title":"Dell Inspiron 15 5000 Core i5 7th Gen - (8 GB/1 TB HDD/Linux) 5567 Laptop",
                    "keySpecs":["Intel Core i5 Processor (7th Gen)","8 GB DDR4 RAM","Linux/Ubuntu Operating System","1 TB HDD","15.6 inch Display"],
                    "image":"",
                    "baseUrl": ""
                }]
            }
        }
  render() {
    return (
        <div>
            <Home laptops= {this.state.laptops}/>
        </div>
    );
  }
}

//export default ParentHome;

function mapStateToProps(state, ownProps){
    return { } ; 
  }
  
  function mapDispatchToProps(dispatch){
    return { };
  }

export default connect(mapStateToProps, mapDispatchToProps) (ParentHome);
