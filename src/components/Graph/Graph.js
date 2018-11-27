import React from "react";
import Plot from "react-plotly.js";
import graphData from "../../utils/graphQueries";

class Graph extends React.Component {
  markerColour = "black";
  constructor(props) {
    super(props);
    this.state = { data: [], layout: {}, frames: [], config: {} };
  }

  componentWillMount() {
    this.setGraphData();
  }

  setGraphData() {
    graphData(this.props.sensorName).then(theGraphData => {
      let i = 0;
      while (i < theGraphData.length) {
        if (1.2 < theGraphData[i] < 2) {
          this.markerColour = "green"; //todo new notification for fridge too cold?
        }
        if (0.5 < theGraphData[i] < 1.2 || 2 < theGraphData[i] < 4) {
          this.markerColour = "amber";
        }
        if (4 < theGraphData[1]) {
          this.markerColour = "red";
        }

        i++;
      }

      this.setState({
        data: [
          {
            x: theGraphData[0],
            y: theGraphData[1],
            type: "line",
            mode: "lines+markers",
            line: { color: "green" },
            fill: "tonexty",
            marker: { color: this.markerColour }
          }
        ],
        // todo set graph title with props
        layout: {
          title: "THIS WILL NEED TO BE SET WITH PROPS"
        },
        frame: {},
        config: {}
      });
      this.forceUpdate();
    });
  }

  renderGraph() {
    var graphSensors = [];
    console.log(this.state.data);
    if (this.state.data !== 0) {
      for (var i = 0; i < this.state.data.length; i++) {
        console.log("yaya");
      }
    }
  }

  render() {
    return (
      <div className={"chart"}>
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
