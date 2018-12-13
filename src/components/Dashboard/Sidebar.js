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
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li className="nav-item active">
              <div className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt" />
                <span> &nbsp; Arduino Dashboard</span>
              </div>
            </li>
          </Link>

          <Link to="/documentation" style={{ textDecoration: "none" }}>
            <li className="nav-item">
              <div className="nav-link">
                <i className="fas fa-fw fa-folder" />
                <span>&nbsp; Documentation</span>
              </div>
            </li>
          </Link>

          <Link to="/dashboard/tables" style={{ textDecoration: "none" }}>
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
