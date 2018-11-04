import React from 'react';
import ReactDOM from 'react-dom';
import ReactRectangle from 'react-rectangle';
import Window from './Window.js';

class TallBuilding extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            widthInt: this.props.widthInt,
            height: this.props.height,
            color: this.props.color,
            windowColor: 'black',
            windows: this.props.windowLength,
            windowMargin: 0,
            numCols: this.props.numCols,
            windowToChange: -1,
            turnOnLight: false,
            sglCol: this.props.sglCol
        };
        this.createWindows = this.createWindows.bind(this)
    }

    componentWillReceiveProps(props) {
        console.log("tall building received props. changing a window to light up is ", props.changeWindow);
        var thisComponent = this;
        if (props.changeWindow) {
            let windowToChange = this.getRandomInt(0, this.state.sglCol.length - 1);
            console.log("window to change ", windowToChange);
            thisComponent.makeWindowChange(windowToChange);
            thisComponent.makeLightChange(true);
        }
    }

    makeWindowChange = res => this.setState({ windowToChange: res })

    makeLightChange = res => this.setState({turnOnLight: res})

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    calculateMargin() {
        let numCols = this.state.numCols;
        let numFreePix = this.state.widthInt - (1*numCols);
        let numPixForEachCol = (numFreePix / numCols);
        let numLeftRightMarginEachCol = (numPixForEachCol/2);
        this.state.windowMargin = numLeftRightMarginEachCol;
        return numLeftRightMarginEachCol;
    }

    createWindows(column) {
        var margin = this.calculateMargin().toString() + "vw";
        var windowId = 0;
        let indivColumn = [];
        for (const window of column) {
            let windowToAdd;
            if (windowId === this.state.windowToChange) {
                windowToAdd = <Window margin={margin} id = {windowId} turnOnLight = {this.state.turnOnLight}/>
            } else {
                windowToAdd = <Window margin={margin} id = {windowId} turnOnLight = {false}/>    
            }
            indivColumn.push(windowToAdd);
            windowId += 1;
        }
        return indivColumn;
    }


    render() {
		return (
            <div name="building">
			<ReactRectangle style={{ background: this.state.color, width: this.state.width, height: this.state.height }}>
                <div style={{display:"flex", alignItems:"flex-end"}}>
                {
                    this.state.windows.map(column => 
                    ( 
                        <div>
                        {this.createWindows(column)}
                        </div>
                ))

                }
                </div>
            </ReactRectangle>
            </div>
        )
    }
}

export default TallBuilding;