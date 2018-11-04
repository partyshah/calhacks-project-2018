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
        // console.log("city area received props. changing a building to light is ", props.changeBuilding);
        var thisComponent = this;
        if ((props.changeBuilding)) {
            // console.log("CITY IS FINDING BUILDING TO CHANGE");
            // console.log("buildling length: ", this.state.buildings.length);
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
        // console.log("INDEX WE WANT ", this.state.buildingToChange);
        while (continueLooping) {
            let buildingWidthInt = 5;
            startX += buildingWidthInt;
            // console.log("STARTX ", startX)
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
            console.log("WHAT WINDOWLENGTH IS " , windowLength);
            let singleCol = windowLength[0];
            console.log("SINGLECOL ", singleCol);
            if (index === this.state.buildingToChange) {
                // console.log("FOUND BUILDING TO CHANGE :D")
                // console.log(this.state.changeWindow)
                buildings.push(<TallBuilding key = {index} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength} changeWindow = {this.state.changeWindow} sglCol = {singleCol}/>)
            } else {
                buildings.push(<TallBuilding key = {index} numCols = {windowLength.length} widthInt = {buildingWidthInt} width={buildingWidth} height = {buildingHeight} color = {buildingColor} windowLength = {windowLength} changeWindow = {false} sglCol = {singleCol}/>)
            }
            }
            index += 1;
        }
        // console.log("BUILDINGS HAHA XD", this.state.buildings)
        this.state.buildings = buildings;
        return buildings;
    }

    // showBuildings() {
    //     let buildingsToShow = [];
    //     for (let i = 0; i < buildings.length; i ++) {
    //         if (i === buildingToChange) {
    //             buildingsToShow.push(buildings)
    //         } else {
    //             buildingsToShow.push(buildings[i])
    //         }
    //     }
    //     return buildingsToShow;
    // }

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