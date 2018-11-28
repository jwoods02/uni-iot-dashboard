import React, { Component } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import TopNav from "../../components/Dashboard/TopNav";
import Sensors from "../../components/Dashboard/SensorView";

class SensorView extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <div id="wrapper">
          <Sidebar />
          <Sensors />
        </div>
      </div>
    );
  }
}

export default SensorView;
