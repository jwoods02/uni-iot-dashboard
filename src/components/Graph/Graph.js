import React from "react";
import Plot from "react-plotly.js";
import graphData from "../../utils/graphQueries";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], layout: {}, frames: [], config: {} };
  }

  componentWillMount() {
    this.setGraphData();
  }

  setGraphData() {
    // const theGraphData = graphData();

    // console.log(theGraphData);

    graphData().then(theGraphData => {
      this.setState({
        data: [
          {
            x: theGraphData[0],
            y: theGraphData[1],
            type: "line",
            mode: "lines+points",
            marker: { color: "red" }
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
