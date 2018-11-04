import React from 'react';
import TallBuilding from './TallBuilding';
import ReactDOM from 'react-dom';

class CityArea extends React.Component {
    constructor(props) {
        super(props)

    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createCity() {
        let buildings = this.props.skyline;
        console.log(buildings)
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
            let buildingHeightInt = this.getRandomInt(10, 50);
            let buildingHeight = buildingHeightInt.toString() + "vh";
            let buildingColor = "#000080";
            let windowLength = [];
            for(let pp = 0; pp < buildingWidthInt; pp+=4){
                let temp = []
                for(let i = 0; i < buildingHeightInt; i+=3) {
                    temp.push(1)
                }
                windowLength.push(temp)
            }

            buildings.push(<TallBuilding key = {i} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength}/>)
        }
        return buildings;
    }

    render() {
		return (
			// Creates the square
			<div className="container" style={{ background: "#000B42", width: "100%", height: "500px", display:"flex", alignItems:"flex-end"}}>
            {this.createCity()}
            </div>
		)
	}
}

export default CityArea;