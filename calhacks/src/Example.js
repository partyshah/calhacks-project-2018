import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Example extends Component {
	_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  render() {
    return (
    	<input onKeyPress={this._handleKeyPress}  placeholder = "Type in your thoughts"/>
    );
  }
}

export default Example;