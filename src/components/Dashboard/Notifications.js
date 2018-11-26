import React, { Component } from "react";
import '../../App.css';
import NotificationsCard from "./NotificationsCard";

class Notifications extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <h1 className="ml-3">Notifications</h1>
        <div className="list-group col">
            <NotificationsCard/>

      </div>
      </div>
    );
  }
}

export default Notifications;
