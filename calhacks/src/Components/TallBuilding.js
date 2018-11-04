import React from 'react';
import ReactDOM from 'react-dom';
import ReactRectangle from 'react-rectangle';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            height: this.props.height,
            color: this.props.color,
            windowColor: 'yellow',
            windows: this.props.windowLength
        };
        this.createWindows = this.createWindows.bind(this)
    }

    createWindows(){
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

    render() {
		return (
            <div name="building">
			<ReactRectangle style={{ background: this.state.color, width: this.state.width, height: this.state.height }}>
                <div style={{display:"flex", alignItems:"flex-end"}}>
                {
                    this.state.windows.map(column => 
                    ( 
                        <div>
                        {column.map(window => 
                            <ReactRectangle style={{ background: this.state.windowColor, width: '4px', height: '4px', marginBottom: '4px', marginRight: '4px', marginLeft: '4px', marginTop: '4px'}}>
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