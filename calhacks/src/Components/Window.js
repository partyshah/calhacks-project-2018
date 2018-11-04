import React, { Component } from 'react';
import '../Styles/Title.css';
import '../App.css';
import ReactRectangle from 'react-rectangle';

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            visible: this.props.visible,
            margin: this.props.margin
        };
    }
  render() {
    return (
        <div>
    	<ReactRectangle style={{ background: "yellow", width: '1vw', height: '1vh', marginBottom: '1vh', marginRight: this.state.margin, marginLeft: this.state.margin, marginTop: "1vh", visibility: this.state.visible }}>
                            </ReactRectangle>
        </div>

    );
  }
}

export default Window;