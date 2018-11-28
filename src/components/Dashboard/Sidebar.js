import React, { Component } from "react";
import "../../App.css";
import Image from "../../Assets/dww.jpg";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownOpen: false
    };

this.handleViewDropdown = this.handleViewDropdown.bind(this);
}
handleViewDropdown(){
  this.setState({
      dropdownOpen: !this.state.dropdownOpen});
}

  render(){
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
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            href="#"
            id="pagesDropdown"
            role="button"
            aria-hidden="true"  
            // data-toggle="dropdown"
            // aria-haspopup="true"
            // aria-expanded="false"
          >
            <i className="fas fa-fw fa-folder" aria-hidden="true" />
            <i className="pull-right" onClick={ () => {this.handleViewDropdown()}} >
            <i class="fas fa-chevron-down mt-2"></i></i>
            <span>Pages</span>
          </a>
          <Dropdown isOpen={this.state.dropdownOpen}/>   
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
}

export default Sidebar;
