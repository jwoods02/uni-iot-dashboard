import React, { Component } from "react";

class Dropdown extends Component {
  render() {
    if (this.props.isOpen === true) {
      return (
        <div>
          <ul>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-hdd"></i>
                <span>Arduino setup</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-book" />
                <span >Apprentice Docs</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-book" />
                <span>Trainers Docs</span>
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul />
        </div>
      );
    }
  }
}

export default Dropdown;
