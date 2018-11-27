import React, {Component} from "react";
import Graph from "../Graph/Graph";
import getSensorNames from "../../utils/graphQueries/getSensorNames";

class SensorInfoCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sensorNames: []
        }
    }

    componentWillMount() {
        getSensorNames().then(
            sensorNames => {
                this.setState({
                    sensorNames: sensorNames
                });
                console.log("state " + this.state.sensorNames)

            });
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    <i className="fas fa-chart-area"/>
                    WHAT TEXT GOES HERE
                </div>
                <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="30"/>

                    {}
                    <Graph sensorName=""/>
                </div>
                <div className="card-footer small text-muted">Updated 5 seconds ago</div>
            </div>
        );
    };

}

export default SensorInfoCard;
