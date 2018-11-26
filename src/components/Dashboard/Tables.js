import React, { Component } from "react";

class Tables extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <!-- DataTables Example --> */}
        <div className="card mb-3 mt-3">
          <div className="card-header">
            <i className="fas fa-table" />
            Tabluar Data format
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
                <tbody>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:05:55</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>6 C</td>
                    <td>11:06:00</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>5 C</td>
                    <td>11:06:05</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>6 C</td>
                    <td>11:06:10</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>5 C</td>
                    <td>11:06:15</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>6 C</td>
                    <td>11:06:20</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>6 C</td>
                    <td>11:06:25</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:30</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:35</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:40</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:45</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:50</td>
                    <td>Hays Hosptial</td>
                  </tr>
                  <tr>
                    <td>1123</td>
                    <td>Temperature</td>
                    <td>7 C</td>
                    <td>11:06:55</td>
                    <td>Hays Hosptial</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div>
        </div>
      </div>
    );
  }
}

export default Tables;
