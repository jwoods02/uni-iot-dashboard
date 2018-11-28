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

  setSensorCardData() {
    getSensorCardData().then(sensorCardData => {
      this.setState({
        sensorName: sensorCardData[0],
        sensorType: sensorCardData[1]
      });

      this.state.sensorName.forEach(populateSensorCard);
      function populateSensorCard(item, index) {
        console.log(item);
        return (
          <div className="row row-height">
            <SensorCard sensorName={item} sensorType={index} />
          </div>
        );
      }
    });
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
