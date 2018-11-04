import React, { Component } from 'react';
import './App.css';
import CityArea from './Components/CityArea';
import './App.css';
import Textbox from './Components/Textbox';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';
import music from './Static/Dewdrop_Fantasy.mp3';
import Sound from 'react-sound';


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
    console.log("got clicked");
    this.changeLight();
  }

  changeLight = res => this.setState({changeBuilding: true})

  render() {
    return (
      <div className="App">
        <Title/>
    	  <Subtitle/>
        <Sound url = {music} playStatus={Sound.status.PLAYING}/>
        <Textbox onEnter = {this.onEnter}/>
        <CityArea skyline={this.state.buildings} changeBuilding={this.state.changeBuilding}/>
      </div>
    
    );
  }
}

export default App;