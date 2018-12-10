import React, { Component } from "react";
import ReactDOM from "react-dom";
import SensorCard from "./SensorCard";
import getSensorCardData from "../../utils/sensorCardQueries/getSensorCardData";
import { Link, Router, Route } from "react-router-dom";
import SensorDetails from './SensorDetails';
class SensorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorName: [],
      sensorType: []
    };
  }

  componentWillMount() {
    this.setSensorCardData();
  }

  setSensorCardData() {
    getSensorCardData().then(sensorCardData => {
      this.setState({
        sensorName: sensorCardData[0],
        sensorType: sensorCardData[1]
      });
  
      this.forEachCallsPopulate();
    });
  }

  forEachCallsPopulate() {
    let sensorcards = [];
    let popSensCard = this.populateSensorCard;
    let sensName = this.state.sensorName;
    let sensType = this.state.sensorType;
  
    // How to render multiple elements retrieved from JoschuaSchneider's solution:
    // https://stackoverflow.com/questions/37378665/render-multiple-react-components-into-a-single-dom-element
    // [Accessed: 28/11/2018]
      // {sensName.map((val, index) => {

        for (var i = 0; i < sensName.length; i++) {
          sensorcards.push(
            <SensorCard
              key={i}
              sensorName={sensName[i]}
              sensorType={sensType[i]}
            />
          );
        }
        // })}
        return (
        <div className="container-fluid" >
        <div className="row row-height">
        { sensorcards }
        </div>
        </div>
        )}

  render() {
    return this.forEachCallsPopulate();
  }
}

export default SensorView;
