import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SensorInfoCardContainer from "./SensorInfoCardContainer";

class GraphDashboard extends Component {
  render() {
    return (
      <div id="content-wrapper">
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
                <Link
                  to="/dashboard/notifications"
                  className="card-footer text-white clearfix small z-1"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right" />
                  </span>
                </Link>
              </div>
            </div>

            <div className="col mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-life-ring" />
                  </div>
                  <div className="mr-5">View Each Sensor</div>
                </div>
                <Link
                  to="/dashboard/sensors"
                  className="card-footer text-white clearfix small z-1"
                >
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Area Chart Example--> */}

          <SensorInfoCardContainer />
        </div>
      </div>
    );
  }
}

export default GraphDashboard;
