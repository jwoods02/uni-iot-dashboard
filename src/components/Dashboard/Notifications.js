import React, { Component } from "react";
import "../../App.css";
import NotificationsCard from "./NotificationsCard";
import notificationData from "../../utils/notificationQueries";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorName: "",
      trigger_time: "",
      trigger_reading: "",
      title: "",
      message: ""
    };
  }

  componentWillMount() {
    this.setNotificationCardData();
  }
  setNotificationCardData() {
    notificationData().then(theNotificationData => {
      console.log(theNotificationData[1]);
      this.setState({
        title: theNotificationData[0],
        message: theNotificationData[2],
        trigger_reading: theNotificationData[4]
      });
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div id="content-wrapper">
        <h1 className="ml-3">Notifications</h1>
        <div className="list-group col">
          <NotificationsCard
            title={this.state.title}
            sensorName={this.state.sensorName}
            trigger_time={this.state.trigger_time}
            message={this.state.message}

            // todo trigger_reading is unused prop
          />
        </div>
      </div>
    );
  }
}

export default Notifications;
