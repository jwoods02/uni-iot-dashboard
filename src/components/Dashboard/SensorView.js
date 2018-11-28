import React, { Component } from "react";
import ReactDOM from "react-dom";
import SensorCard from "./SensorCard";
import getSensorCardData from "../../utils/sensorCardQueries/getSensorCardData";

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
    let popSensCard = this.populateSensorCard;
    let sensName = this.state.sensorName;
    let sensType = this.state.sensorType;
    return ReactDOM.render(
      <div className="row row-height">
        {sensName.map((val, index) => {
          return (
            <SensorCard
              key={index}
              sensorName={val}
              sensorType={sensType[index]}
            />
          );
        })}
      </div>,
      document.getElementById("card-container")
    );
  }

  // populateSensorCard(name, type) {
  //   // console.log(name, type);
  //   // return ReactDOM.render(
  //   //   <SensorCard sensorName={name} sensorType={type} />,
  //   //   document.getElementById("card-row")
  //   // );
  // }

  render() {
    return <div id="card-container" className="container-fluid" />;
  }
}

export default SensorView;
