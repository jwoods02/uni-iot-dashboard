import React, { Component } from "react";
import { Link} from "react-router-dom";
import SensorTherm from "../../assets/dht-11.png";
import SensorLight from "../../assets/tsl2561.png";
import "../../App.css";

class SensorCard extends Component {

  render() {
    let card;
    if (this.props.sensorType === "LIGHT") {
      card = (
        <div className="card-body">
          <i className="fas fa-3x fa-lightbulb" />
          <div className="logo-view">
            <img
              className="sensor-logo"
              src={SensorLight}
              alt="Sensor img not found"
            />
          </div>
          <div className="card-text-bottom-l1">{this.props.sensorName}</div>
          <div className="card-text-bottom-l2">{this.props.sensorType}</div>
        </div>
      );
    } else if (this.props.sensorType === "TEMP") {
      card = (
        <div className="card-body">
          <i className="fas fa-3x fa-temperature-high" />{" "}
          <div className="logo-view">
            <img
              className="sensor-logo"
              src={SensorTherm}
              alt="Sensor img not found"
            />
          </div>
          <div className="card-text-bottom-l1">{this.props.sensorName}</div>
          <div className="card-text-bottom-l2">{this.props.sensorType}</div>
        </div>
      );
    }

    return (
      <div className="col mb-4 ml-2 mt-3">
        <div className="card card-shadow text-white bg-dark o-hidden h-100">
          <div className="text-white clearfix small z-1">
            <Link
              to={"/dashboard/sensor/" + this.props.sensorName}
              state={{ id: this.props.sensorName }}
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {card}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SensorCard;
