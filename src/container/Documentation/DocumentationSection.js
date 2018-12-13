import React, { Component } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import NavTop from "../../components/Dashboard/TopNav";
import SensorDetails from "../../components/Dashboard/SensorDetails";
import SectionWrapper from "../../components/Documentation/SectionWrapper";

export default class DocumentationSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: true
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
  }

  handleViewSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  }

  render() {
    if (this.state.sidebarOpen === true)
      return (
        <div>
          <NavTop onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <Sidebar isOpen={this.state.sidebarOpen} />
            <div className="container documentation-container">
              <SectionWrapper />
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <NavTop onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <div className="container documentation-container">
              <SectionWrapper />
            </div>
          </div>
        </div>
      );
  }
}
