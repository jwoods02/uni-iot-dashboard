import React, { Component } from "react";
import SensorCard from "./SensorCard";
import getSensorCardData from "../../utils/sensorCardQueries/getSensorCardData";

class SensorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorName: [1],
      sensorType: [1]
    };
  }

  componentWillMount() {
    // this.setSensorCardData();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row row-height">{this.setSensorCardData} </div>
      </div>
    );
  }
}

export default SensorView;
