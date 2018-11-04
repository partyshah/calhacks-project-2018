import React from 'react';
import ReactDOM from 'react-dom';
import ReactRectangle from 'react-rectangle';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            widthInt: this.props.widthInt,
            height: this.props.height,
            color: this.props.color,
            windowColor: 'yellow',
            windows: this.props.windowLength,
            windowMargin: 0,
            numCols: this.props.numCols
        };
        this.createWindows = this.createWindows.bind(this)
    }

    createWindows(){
        console.log("PROPS WINDOW LENGTH");
        console.log(this.state.windows);
        for(let i = 0; i < 100; i += 6){
            this.setState({
                windows: this.state.windows.concat(
                    <ReactRectangle style={{ background: this.state.windowColor, width: '4px', height: '4px' }}>
                    </ReactRectangle>

                )
            })
        }
        console.log("buildings")
        console.log(this.state.windows)
    }

    calculateMargin() {
        let numCols = this.state.numCols;
        let numFreePix = this.state.widthInt - (1*numCols);
        console.log("BUILDING WIDTH ", this.state.widthInt);
        let numPixForEachCol = (numFreePix / numCols);
        let numLeftRightMarginEachCol = (numPixForEachCol/2);
        this.state.windowMargin = numLeftRightMarginEachCol;
        return numLeftRightMarginEachCol;
    }

    render() {
        let margin = this.calculateMargin().toString() + "vw";
        console.log("MARGIN IS: ");
        console.log(margin);
		return (
            <div name="building">
			<ReactRectangle style={{ background: this.state.color, width: this.state.width, height: this.state.height }}>
                <div style={{display:"flex", alignItems:"flex-end"}}>
                {
                    this.state.windows.map(column => 
                    ( 
                        <div>
                        {column.map(window => 
                            <ReactRectangle style={{ background: this.state.windowColor, width: '1vw', height: '1vh', marginBottom: '1vh', marginRight: "1vw", marginLeft: "1vw", marginTop: '1vh'}}>
                            </ReactRectangle>
                        )}
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