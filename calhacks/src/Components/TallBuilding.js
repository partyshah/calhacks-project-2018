import React from 'react';
import ReactDOM from 'react-dom';
import ReactRectangle from 'react-rectangle';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: this.props.width,
            height: this.props.height,
            color: this.props.color
        };
    }

    render() {
		return (
            <div name="building">
			<ReactRectangle style={{ background: this.state.color, width: this.state.width, height: this.state.height }} />
            </div>
        )
    }
}

export default CityArea;