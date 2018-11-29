import React, { Component } from "react";
import Graph from "../Graph/Graph";
import SensorInfoCard from "./SensorInfoCard";
import getSensorNames from "../../utils/graphQueries/getSensorNames";

export default class SensorInfoCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensorNames: ["fridge_temp_1"]
    };

    // getSensorNames().then(sensorNames => {
    //   console.log(sensorNames);
    //   this.setState({
    //     sensorNames: sensorNames
    //   });
    // });
  }

  componentWillMount() {}

  renderSensors() {
    let sensorList = [];
    console.log(this.state.sensorNames);
    for (const sensorName in this.state.sensorNames) {
      sensorList.push(<SensorInfoCard sensor={sensorName} />);
    }

    return sensorList;
  }

  render() {
    return this.renderSensors();
  }
}
