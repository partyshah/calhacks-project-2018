import React, { Component } from 'react';
import TallBuilding from './Components/TallBuilding';
import logo from './logo.svg';
import './App.css';
import CityArea from './Components/CityArea';

class App extends Component {

  createCity() {
    let buildings = [];
    let startX = 0;
    let endX = 400;
    for (let i = 0; i < 20; i++) {
        let buildingWidth = Math.floor((Math.random() * 10) + 1).toString() + "vw";
        let buildingHeight = Math.floor((Math.random() * 10) + 1).toString() + "vh";
        let buildingColor = "#000080";
        console.log(buildingWidth);
        console.log(buildingHeight)
        console.log("fuk");
        buildings.push(<TallBuilding key = {i} width={buildingWidth} height={buildingHeight} color = {buildingColor}/>)
    }
    return buildings;
  }

  render() {
    return (
      <div className="App">
        <CityArea/>
      </div>
    );
  }
}

export default App;
