import React, { Component } from 'react';
import '../Styles/Title.css';
import '../App.css';
import ReactRectangle from 'react-rectangle';

class Window extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            visible: "hidden",
            margin: this.props.margin, 
            turnOnLight: false
        };
    }

    componentWillReceiveProps(props) {
        // console.log("window received props. lighting this window is ", props.turnOnLight);
        var thisComponent = this;
        if (props.turnOnLight) {
            // console.log("it's true that turn on light from props is true")
            thisComponent.lightWindow("visible");
        }
    }

    lightWindow = res => this.setState({visible: res})
  
    render() {
    //   console.log("THE VISIBILITY IS: ", this.state.visible);
    return (
        <div>
    	<ReactRectangle style={{ background: "yellow", width: '1vw', height: '1vh', marginBottom: '1vh', marginRight: this.state.margin, marginLeft: this.state.margin, marginTop: "1vh", visibility: this.state.visible }}>
                            </ReactRectangle>
        </div>

    );
  }
}

export default Window;