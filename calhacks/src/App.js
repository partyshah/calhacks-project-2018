import React, { Component } from 'react';
import './App.css';
import Example from './Example';
import Title from './Title';
import Subtitle from './Subtitle';




class App extends Component {
  render() {
    return (
    	<div>

    	<Title/>
    	<Subtitle/>
     <Example/>
     </div>
    );
  }
}

export default App;