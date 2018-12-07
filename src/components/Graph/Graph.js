import React from "react";
import Plot from "react-plotly.js";
import getGraphDataBySensorName from "../../utils/graphQueries/getGraphDataBySensorName";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], layout: {}, frames: [], config: {} };
    if (this.props.sensorName) {
      this.setGraphData();
    }
  }

  componentWillReceiveProps() {
    if (this.props.sensorName) {
      this.setGraphData();
    }
  }
  setGraphData() {
    getGraphDataBySensorName(this.props.sensorName).then(theGraphData => {
      this.setState({
        data: [
          {
            x: theGraphData[0],
            y: theGraphData[1],
            type: "line",
            mode: "lines+markers",
            line: { color: "green" },
            fill: "tonexty"
          }
        ],
        // todo set graph title with props
        layout: {
          title: ""
        },
        frame: {},
        config: {}
      });
    });
  }

  render() {
    return (
      <div>
        <Plot
          data={this.state.data}
          layout={this.state.layout}
          frames={this.state.frames}
          config={this.state.config}
          onInitialized={figure => this.setState(figure)}
          onUpdate={figure => this.setState(figure)}
        />
      </div>
    );
  }
}

export default Graph;
