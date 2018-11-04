import React from 'react';
import TallBuilding from './TallBuilding';
import ReactDOM from 'react-dom';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buildings : this.props.skyline,
            changeBuilding: this.props.changeBuilding,
            buildingToChange: -1,
            changeWindow: false
        };
    }

    componentDidMount() {
        this.createBuildings();
    }

    componentWillReceiveProps(props) {
        var thisComponent = this;
        if ((props.changeBuilding)) {
            let buildingToChange = this.getRandomInt(0, this.state.buildings.length - 1);
            thisComponent.makeBuildingChange(buildingToChange);
            thisComponent.makeWindowChange(true);
        }
    }

    makeBuildingChange = res => this.setState({ buildingToChange: res })

    makeWindowChange = res => this.setState({changeWindow: res})

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createBuildings() {
        let buildings = [];
        let startX = 0;
        let continueLooping = true;
        let index = 0;
        while (continueLooping) {
            let buildingWidthInt = 5;
            startX += buildingWidthInt;
            if (startX > 100) {
                buildingWidthInt = buildingWidthInt - (startX - 100)
                continueLooping = false;
            }
            let buildingWidth = buildingWidthInt.toString() + "vw";
            let buildingHeightInt = this.getRandomInt(10, 55);
            let buildingHeight = buildingHeightInt.toString() + "vh";
            let buildingColor = "#000080";
            let windowLength = [];
            for(let pp = 0; pp < buildingWidthInt; pp+=4){
                let temp = []
                for(let i = 0; i < buildingHeightInt; i+=2.5) {
                    temp.push(1)
                }
                windowLength.push(temp)
            }
            if (windowLength.length != 0) {
            let singleCol = windowLength[0];
            if (index === this.state.buildingToChange) {
                buildings.push(<TallBuilding key = {index} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength} changeWindow = {this.state.changeWindow} sglCol = {singleCol}/>)
            } else {
                buildings.push(<TallBuilding key = {index} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength} changeWindow = {false} sglCol = {singleCol}/>)
            }
            }
            index += 1;
        }
        this.state.buildings = buildings;
        return buildings;
    }

    render() {
		return (
			<div className="container" style={{ background: "#000B42", width: "100%", height: "500px", display:"flex", alignItems:"flex-end"}}>
            {this.createBuildings()}
            </div>
		)
	}
}

export default CityArea;