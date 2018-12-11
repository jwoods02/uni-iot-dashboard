import React, { Component } from "react";
import getDataBySensorName from "../../utils/sensorCardQueries/getDataBySensorName";
import SensorTable from './SensorTableCom';
import UpdateData from '../../utils/sensorCardQueries/UpdateData';
import firebase from 'firebase';

export default class SensorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: "",
      indicator: ""
    };
  }

  componentWillMount() {
    let url = window.location.pathname;
    let sensorName = url.substring(url.lastIndexOf("/") + 1, url.length);
    // this.getData(sensorName);
    // no longer need this static ref ^
    // how to get real time updates with react
    // https://www.youtube.com/watch?v=_GOI7h9ojr8
    // Accessed [10.12.2018]
    let ref = firebase.firestore().collection('sensor').where('name', '==', sensorName);
    ref.onSnapshot((querySnapshot)=> {
        querySnapshot.docChanges().forEach((change) => {
            if (change.empty) {
                console.log('No matching documents or Empty.');
                return;
              }
        this.setState({
          data: change.doc.data(),
          id: change.doc.id
        })
        })

  })
}

  render() {
    if (this.state.data.readings) {
      var sensortables = [];
        let readings = this.state.data.readings.map(value => value);
        for (var i = 0; i < readings.length; i++) {

            sensortables.push(
                <SensorTable
                key={i}
                id = {this.state.id}
                type={this.state.data.type}
                value={readings[i].value}
                date={new Date(readings[i].date).toString()}
                indicator={this.state.indicator}
                />
            )
    }

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
          <li className="list-group-item">Sensor identification : {this.state.id}</li>
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
        </div>
      </div>
    );
  }
}
