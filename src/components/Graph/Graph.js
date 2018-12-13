import React from "react";
import Plot from "react-plotly.js";
import getGraphDataBySensorName from "../../utils/graphQueries/getGraphDataBySensorName";
import firebase from 'firebase';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], layout: {}, frames: [], config: {} };
    if (this.props.sensorName) {
      this.updateGraphData();
    }
  }

  componentWillMount(){
    if (this.props.sensorName) {
      this.updateGraphData();
    }
  }

  updateGraphData(){
    var data = []
    var xAxis =[];
    var yAxis =[];
    let ref = firebase.firestore().collection('sensor').where('name', '==', this.props.sensorName);
    ref.onSnapshot((querySnapshot)=> {
        querySnapshot.docChanges().forEach((change) => {
            if (change.empty) {
                console.log('No matching documents or Empty.');
                return;
              }
              data = change.doc.data().readings;
              if (data.length > 0){
              for (var i = 0; i< data.length; i++){
                   xAxis.push(new Date(data[i].date["seconds"] * 1000));
                   yAxis.push(data[i]["value"]);
              }
                  this.setState({
                    data: [
                      {
                        x: xAxis,
                        y: yAxis,
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
                }
                });

                  // console.log(change.doc.data())
                });
              }
// will leave this function here. Setgraph data gets graph data once!
  // setGraphData() {
  //   getGraphDataBySensorName(this.props.sensorName).then(theGraphData => {
  //     this.setState({
  //       data: [
  //         {
  //           x: theGraphData[0],
  //           y: theGraphData[1],
  //           type: "line",
  //           mode: "lines+markers",
  //           line: { color: "green" },
  //           fill: "tonexty"
  //         }
  //       ],
  //       // todo set graph title with props
  //       layout: {
  //         title: ""
  //       },
  //       frame: {},
  //       config: {}
  //     });
  //   });
  // }

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
