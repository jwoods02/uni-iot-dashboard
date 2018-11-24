import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      // <div id="content-wrapper">

      <div className="container-fluid">
        {/* <!-- Breadcrumbs--> */}
        <ol className="breadcrumb mt-3">
          <li className="breadcrumb-item">
            <a href="#">Dashboard</a>
          </li>
          <li href="#" className="breadcrumb-item active">
            Overview
          </li>
        </ol>

        {/* <!-- Icon Cards--> */}
        <div className="row">
          <div className="col mb-3">
            <div className="card text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-comments" />
                </div>
                <div className="mr-5">View all notifications</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right" />
                </span>
              </a>
            </div>
          </div>

          <div className="col mb-3">
            <div className="card text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fas fa-fw fa-life-ring" />
                </div>
                <div className="mr-5">View Each Sensons</div>
              </div>
              <a className="card-footer text-white clearfix small z-1" href="#">
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fas fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Area Chart Example--> */}
        <div className="card mb-3">
          <div className="card-header">
            <i className="fas fa-chart-area" />
            Sensor Histroic Data
          </div>
          <div className="card-body">
            <canvas id="myAreaChart" width="100%" height="30" />
          </div>
          <div className="card-footer small text-muted">
            Updated 5 seconds ago
          </div>
        </div>

        {/* <!-- DataTables Example --> */}
        <div className="card mb-3">
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

export default Cards;
