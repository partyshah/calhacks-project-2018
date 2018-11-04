import React, { Component } from 'react';
import './App.css';
import CityArea from './Components/CityArea';
import './App.css';
import Example from './Example';
import Title from './Title';
import Subtitle from './Subtitle';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      buildings: []
    };
  }

  render() {
    return (
 
      <div className="App">
        <Title/>
    	  <Subtitle/>
        <Example/>
        <CityArea skyline={this.state.buildings}/>
      </div>
    
    );
  }
}

export default App;