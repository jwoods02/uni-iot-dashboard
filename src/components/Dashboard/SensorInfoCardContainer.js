import React, { Component } from "react";
import SensorInfoCard from "./SensorInfoCard";
import getSensorNames from "../../utils/graphQueries/getSensorNames";

export default class SensorInfoCardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensorNames: []
    };

    getSensorNames().then(sensorNames => {
      this.setState({
        sensorNames: sensorNames
      });
    });
  }

  componentWillMount() {}

  renderSensors() {
    let sensorList = [];
    this.state.sensorNames.forEach((sensorName, index) => {
      sensorList.push(<SensorInfoCard key={index} sensor={sensorName} />);
    });

    return sensorList;
  }

  render() {
    return this.renderSensors();
  }
}
