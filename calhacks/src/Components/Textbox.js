import React, { Component } from 'react';
import '../App.css';
import '../Styles/Textbox.css';

class Textbox extends Component {
	_handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      var thisComponent = this;
      thisComponent.props.onEnter();
    }
  }

  render() {
    return (
    	<input onKeyPress={this._handleKeyPress}  placeholder = "type here and hit enter to light up the city"/>
    );
  }
}

export default Textbox;