import React from "react";
import Graph from "../Graph/Graph";

const SensorInfoCard = (props) => {
    return(
        <div className="card mb-3">
            <div className="card-header">
                <i className="fas fa-chart-area" />
                IOT Sensor : {props.name}
            </div>
            <div className="card-body">
                <canvas id="myAreaChart" width="100%" height="30" />
                <Graph/>
            </div>
            <div className="card-footer small text-muted">
                Updated 5 seconds ago
            </div>
        </div>
    )
};

export default SensorInfoCard;