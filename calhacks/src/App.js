import React, { Component } from 'react';
import TallBuilding from './Components/TallBuilding';
import logo from './logo.svg';
import './App.css';
import CityArea from './Components/CityArea';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CityArea/>
      </div>
    );
  }
}

export default App;
