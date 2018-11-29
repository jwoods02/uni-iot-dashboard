import React, { Component } from "react";
import Graph from "../Graph/Graph";

class SensorInfoCard extends Component {
  render() {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-chart-area" />
            IOT Sensor {this.props.sensor}
          </div>
          <div className="card-body">
            <canvas id="myAreaChart" width="100%" height="30" />

            <Graph sensorName={this.props.sensor} />
          </div>
          <div className="card-footer small text-muted">
            Updated 5 seconds ago
          </div>
        </div>
      </div>
    );
  }
}

export default SensorInfoCard;
