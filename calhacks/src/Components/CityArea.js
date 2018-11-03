import React from 'react';
import TallBuilding from './TallBuilding';
import ReactDOM from 'react-dom';

class CityArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
		};
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createCity() {
        let buildings = [];
        let startX = 0;
        let endX = 400;
        for (let i = 0; i < 30; i++) {
            let buildingWidth = this.getRandomInt(2, 6).toString() + "vw";
            let buildingHeight = this.getRandomInt(1, 50).toString() + "vh";
            let buildingColor = "#000080";
            buildings.push(<TallBuilding key = {i} width={buildingWidth} height = {buildingHeight} color = {buildingColor}/>)
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