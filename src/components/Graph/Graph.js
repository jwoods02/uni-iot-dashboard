import React from "react";
import Plot from 'react-plotly.js';
import graphData from "../../utils/graphQueries"


class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [], layout: {}, frames: [], config: {} };
        this.setGraphData();
    }

    componentWillMount() {

    }

    setGraphData(){
        const graphData = graphData();

        this.setState({
            data:
                [{
                // todo this data will need to be set
                    x: graphData[0],  // todo query for time
                    y: graphData[1], // todo query for sensor data
                    type: 'line',
                    mode: 'lines+points',
                    marker: {color: 'red'}
                }],
            // todo set graph title with props
            layout: {
                width: 600, height: 600, title: "THIS WILL NEED TO BE SET WITH PROPS"
            },
            frame: {

            },
            config: {

            }
        })
    }


    render() {


        return (
            <div className={"chart"}>

                <Plot
                    data={this.state.data}
                    layout={this.state.layout}
                    frames={this.state.frames}
                    config={this.state.config}
                    onInitialized={(figure) => this.setState(figure)}
                    onUpdate={(figure) => this.setState(figure)}
                />

            </div>
        );
    };
}

export default Graph;