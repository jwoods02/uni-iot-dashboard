import React, { Component } from "react";
import { Link } from "react-router-dom";
class TopNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
          <div className="navbar-brand mr-1">
            Data Works Wales
          </div>

          <button
            className="btn btn-link btn-sm text-white order-1 order-sm-0"
            onClick={this.props.onClick}
            href="#"
          >
            <i className="fas fa-bars" />
          </button>

          {/* Nav  */}
          <ul className="navbar-nav my-2 ml-auto">
            <li className="nav-item dropdown no-arrow mx-1">
              <Link
                className="nav-link dropdown-toggle"
                to="/dashboard/notifications"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw" />
                <span className="badge badge-danger">9+</span>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="alertsDropdown"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user-circle fa-fw" />
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Activity Log
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default TopNav;
