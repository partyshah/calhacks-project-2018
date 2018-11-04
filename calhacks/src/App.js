import React, { Component } from 'react';
import './App.css';
import CityArea from './Components/CityArea';
import './App.css';
import Textbox from './Components/Textbox';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';


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
        <Textbox/>
        <CityArea skyline={this.state.buildings}/>
      </div>
    
    );
  }
}

export default App;