import React, { Component } from "react";
import "../../App.css";
import Image from "../../Assets/dww.jpg";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div>
      <ul className="sidebar navbar-nav">
        <Link to="/dashboard">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Arduino Dashboard</span>
            </a>
          </li>
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-plus" />
            <span>New Sensor</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            id="pagesDropdown"
            role="button"
            // data-toggle="dropdown"
            // aria-haspopup="true"
            // aria-expanded="false"
          >
            <i className="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          {/* <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="login.html">
              Login
            </a>
            <a className="dropdown-item" href="register.html">
              Register
            </a>
            <a className="dropdown-item" href="forgot-password.html">
              Forgot Password
            </a>
            <div className="dropdown-divider" />
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="404.html">
              404 Page
            </a>
            <a className="dropdown-item" href="blank.html">
              Blank Page
            </a>
          </div> */}
        </li>
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>

        <Link to="/dashboard/tables">
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span>
            </a>
          </li>
        </Link>
        <div className="image">
          <img src={Image} alt="data works wales img not found" />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
