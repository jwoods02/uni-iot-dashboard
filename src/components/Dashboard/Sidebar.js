import React, { Component } from "react";
import "../../App.css";
import Image from "../../assets/dww.jpg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };

    this.handleViewDropdown = this.handleViewDropdown.bind(this);
  }
  handleViewDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <ul className="sidebar navbar-nav">
          <Link to="/dashboard">
            <li className="nav-item active">
              <div className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span> &nbsp; Arduino Dashboard</span>
              </div>
            </li>
          </Link>

          <li className="nav-item">
            <div className="nav-link">
              <i className="fas fa-fw fa-plus" />
              <span> &nbsp; New Sensor</span>
            </div>
          </li>

          <li className="nav-item">
            <div
              className="nav-link"
              // role="button"
              aria-hidden="true"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-fw fa-folder" aria-hidden="true" />
              <i
                className="pull-right"
                onClick={() => {
                  this.handleViewDropdown();
                }}
              >
                <i className="fas fa-chevron-down mt-2" />
              </i>
              <span>&nbsp; Documentation</span>
            </div>
            <Dropdown isOpen={this.state.dropdownOpen} />
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <i className="fas fa-fw fa-chart-area" />
              <span>&nbsp; Charts</span>
            </div>
          </li>

          <Link to="/dashboard/tables">
            <li className="nav-item">
              <div className="nav-link">
                <i className="fas fa-fw fa-table" />
                <span>&nbsp; Tables</span>
              </div>
            </li>
          </Link>

          <div className="image">
            <img src={Image} alt="data works wales img not found" />
          </div>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
