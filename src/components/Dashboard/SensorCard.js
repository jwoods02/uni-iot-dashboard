import React from "react";
import { Link, Route } from "react-router-dom";
import SensorTherm from "../../Assets/dht-11.png";
// TODO: Get sensor image from type prop

const SensorCard = props => {
  return (
    <div className="col mb-4 ml-2 mt-3">
      <div className="card card-shadow text-white bg-danger o-hidden h-100">
        <Link
          to="/dashboard/sensors"
          className=" text-white clearfix small z-1"
        >
          <div className="card-body">
            <i className="fas fa-3x fa-temperature-high" />
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
        </Link>
      </div>
    </div>
  );
};

export default SensorCard;
