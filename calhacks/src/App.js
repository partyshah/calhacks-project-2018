import React, { Component } from 'react';
import './App.css';
import CityArea from './Components/CityArea';
import './App.css';
import Example from './Example';
import Title from './Title';
import Subtitle from './Subtitle';


class App extends Component {

  render() {
    return (
 
      <div className="App">
        <Title/>
    	  <Subtitle/>
        <Example/>
        <CityArea/>
      </div>
    );
  }
}

export default App;