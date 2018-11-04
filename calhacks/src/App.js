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
      buildings: [],
      changeBuilding: false,
    };
    this.onEnter = this.onEnter.bind(this)
  }

  onEnter() {
    // console.log("got clicked");
    this.changeLight();
  }

  changeLight = res => this.setState({changeBuilding: true})

  render() {
    // console.log("CHANGE BUILDING ", this.state.changeBuilding);
    return (
      <div className="App">
        <Title/>
    	  <Subtitle/>
        <Textbox onEnter = {this.onEnter}/>
        <CityArea skyline={this.state.buildings} changeBuilding={this.state.changeBuilding}/>
      </div>
    
    );
  }
}

export default App;