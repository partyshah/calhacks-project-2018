import React from 'react';
import TallBuilding from './TallBuilding';
import ReactDOM from 'react-dom';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buildings : this.props.skyline
        };
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createBuildings() {
        let startX = 0;
        let endX = 99;
        let continueLooping = true;
        let i = 0;
        while (continueLooping) {
            i += 1;
            let buildingWidthInt = this.getRandomInt(3, 9);
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

            this.state.buildings.push(<TallBuilding key = {i} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength}/>)
        }
        console.log("BUILDINGS HAHA XD", this.state.buildings)
        return this.state.buildings;
    }

    render() {
		return (
			// Creates the square
			<div className="container" style={{ background: "#000B42", width: "100%", height: "500px", display:"flex", alignItems:"flex-end"}}>
            {this.createBuildings()}
            </div>
		)
	}
}

export default CityArea;