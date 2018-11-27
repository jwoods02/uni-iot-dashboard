import React, { Component } from "react";
import Graph from "../Graph/Graph";
import getSensorNames from "../../utils/graphQueries/getSensorNames";

class SensorInfoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sensorNames: []
    };
  }

  componentWillMount() {
    getSensorNames().then(sensorNames => {
      this.setState({
        sensorNames: sensorNames
      });
    //   console.log(this.state.sensorNames)
    });
  }

  renderGraph() {
    var sensorList = [];
    console.log(this.state.sensorNames.length)
    if (this.state.sensorNames.length === 3){
        console.log(this.state.sensorNames)
        for (const sensorName in this.state.sensorNames) {
          console.log(sensorName)
            sensorList.push(
              <div>
                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-chart-area" />
                    IOT Sensor {sensorName}
                  </div>
                  <div className="card-body">
                    <canvas id="myAreaChart" width="100%" height="30" />
      
                    <Graph sensorName={sensorName} />
                  </div>
                  <div className="card-footer small text-muted">
                    Updated 5 seconds ago
                  </div>
                </div>
                );
              </div>
            );
          }
    }
    console.log(sensorList.length)
    return sensorList;
}
  
  render() {
    return this.renderGraph();
//     return (
//         <div>
//         <div className="card mb-3">
//           <div className="card-header">
//             <i className="fas fa-chart-area" />
//             WHAT TEXT GOES HERE
//           </div>
//           <div className="card-body">
//             <canvas id="myAreaChart" width="100%" height="30" />

// {console.log(this.state.sensorNames[2])}
//             <Graph sensorName={this.state.sensorNames[2]} />
//           </div>
//           <div className="card-footer small text-muted">
//             Updated 5 seconds ago
//           </div>
//         </div>
//         );
//       </div>
//     )
  }
}

export default SensorInfoCard;
