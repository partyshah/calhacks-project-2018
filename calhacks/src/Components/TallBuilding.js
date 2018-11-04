import React from 'react';
import ReactDOM from 'react-dom';
import ReactRectangle from 'react-rectangle';
import Window from './Window.js';

class CityArea extends React.Component {
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
            windowObjects: []
        };
        this.createWindows = this.createWindows.bind(this)
    }

    // createWindows(){
    //     console.log("PROPS WINDOW LENGTH");
    //     console.log(this.state.windows);
    //     for(let i = 0; i < 100; i += 6){
    //         this.setState({
    //             windows: this.state.windows.concat(
    //                 <ReactRectangle style={{ background: this.state.windowColor, width: '4px', height: '4px' }}>
    //                 </ReactRectangle>

    //             )
    //         })
    //     }
    // }

    calculateMargin() {
        let numCols = this.state.numCols;
        let numFreePix = this.state.widthInt - (1*numCols);
        let numPixForEachCol = (numFreePix / numCols);
        let numLeftRightMarginEachCol = (numPixForEachCol/2);
        this.state.windowMargin = numLeftRightMarginEachCol;
        return numLeftRightMarginEachCol;
    }

    createWindows(column) {
        console.log("THIS.STATE.WINDOWS ", this.state.windows)
        var margin = this.calculateMargin().toString() + "vw";
        var windowId = 0;
        let indivColumn = [];
        for (const window of column) {
            windowId += 1;
            let windowToAdd = <Window margin={margin} id = {windowId} visible="hidden"/>
            this.state.windowObjects.push(windowToAdd);
            indivColumn.push(windowToAdd);
        }
        console.log("WINDOW OBJECTS ", this.state.windowObjects);
        return indivColumn;
    }


    render() {
        // let margin = this.calculateMargin().toString() + "vw";
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

export default CityArea;