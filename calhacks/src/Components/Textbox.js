import React, { Component } from 'react';
import '../App.css';
import '../Styles/Textbox.css';

class Textbox extends Component {
	_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
      var thisComponent = this;
      thisComponent.props.onEnter();
    }
  }

  render() {
    return (
    	<input onKeyPress={this._handleKeyPress}  placeholder = "Type in your thoughts"/>
    );
  }
}

export default Textbox;