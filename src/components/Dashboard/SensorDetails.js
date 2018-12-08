import React, { Component } from "react";
import getDataBySensorName from "../../utils/sensorCardQueries/getDataBySensorName";
import SensorTable from './SensorTableCom';

export default class SensorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      indicator: ""
    };
  }

  componentWillMount() {
    let url = window.location.pathname;
    var sensorName = url.substring(url.lastIndexOf("/") + 1, url.length);
    this.getData(sensorName);
  }

  getData(sensorName) {
    getDataBySensorName(sensorName).then(result => {
      this.setState({
        data: result
      });
    });
    // console.log("date object ____", this.state.data.last_updated.toString());
  }

  render() {
    if (this.state.data.readings) {
        // if (this.state.data.length == 0)
        var sensortables = [];
        let readings = this.state.data.readings.map(value => value);
        for (var i = 0; i < readings.length; i++) {
            sensortables.push(
                <SensorTable 
                key={i}
                id = {this.state.data.id}
                type={this.state.data.type}
                value={readings[i].value}
                date={new Date(readings[i].date).toString()}
                indicator={this.state.indicator}
                />
            )
    }
    
}
 else {
     // this needs some work
     let sensortables = [];
     sensortables.push(
        <SensorTable 
        key={i}
        id = "no data"
        type="no data"
        value="no data"
        date="no data"
        indicator=""
        />
     )
 }
    return (
      <div>
          <br />
          <div className="container-fluid">
        <ul className="list-group">
        <div className="card">
        <div className="card-header">
            <i className="fas fa-table" />
            Sensor Statistics
        </div>
        </div>
          <li className="list-group-item">Sensor name : {this.state.data.name}</li>
          <li className="list-group-item">Sensor identification : {this.state.data.id}</li>
          <li className="list-group-item"> Sensor last updated :{" "}
            {new Date(this.state.data.last_updated).toString()}
          </li> 
          <li className="list-group-item"> Sensor status : ON
          </li>
        </ul>
        
        {/* <!-- DataTables Example --> */}
        <div className="card mb-3 mt-3">
          <div className="card-header">
            <i className="fas fa-table" />
            Tabluar Data for - {this.state.data.name}
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Sensor ID</th>
                    <th>Sensor Type</th>
                    <th>Sensor Value</th>
                    <th>Timestamp</th>
                    <th>Sesnor Location</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sensor ID</th>
                    <th>Sensor Type</th>
                    <th>Sensor Value</th>
                    <th>Timestamp</th>
                    <th>Sesnor Location</th>
                  </tr>
                </tfoot>
                
                { sensortables }
              </table>
            </div>
          </div>
          <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
      </div>
      </div>
    );
  }
}
