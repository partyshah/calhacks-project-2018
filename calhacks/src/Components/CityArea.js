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
        let endX = 400;
        for (let i = 0; i < 30; i++) {
            let buildingWidthInt = this.getRandomInt(4, 10);
            let buildingWidth = buildingWidthInt.toString() + "vw";
            let buildingHeightInt = this.getRandomInt(10, 50);
            let buildingHeight = buildingHeightInt.toString() + "vh";
            let buildingColor = "#000080";
            let windowLength = [];
            for(let pp = 0; pp < buildingWidthInt; pp+=1.3){
                let temp = []
                for(let i = 0; i < buildingHeightInt; i+=1.5) {
                    temp.push(1)
                }
                windowLength.push(temp)
            }
            buildings.push(<TallBuilding key = {i} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength}/>)
        }
        return buildings;
    }

    render() {
		return (
			// Creates the square
			<div className="container" style={{ background: "#000000", width: "100%", height: "500px", display:"flex", alignItems:"flex-end"}}>
            {this.createCity()}
            </div>
		)
	}
}

export default CityArea;