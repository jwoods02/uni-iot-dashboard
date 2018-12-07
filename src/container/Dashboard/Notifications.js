import React, { Component } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import TopNav from "../../components/Dashboard/TopNav";
import Notification from "../../components/Dashboard/Notifications";
import NotificationPlus from "../../components/Dashboard/newSensorPlus";
import Modal from "react-responsive-modal";
import postNewNotification from "../../utils/sendNotificationDetails";
import "../../App.css";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };

    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleViewSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  sendNotificationData(e) {
    const router = this.props;
    e.preventDefault();
    postNewNotification(this.state.sensorName, this.state.sensorType).then(
      success => {
        this.setState({ success: true });
      }
    );
    //   console.log("successful")
    //   this.setState({success: true});
    //   console.log(this.state.success)
    // });
  }

  render() {
    if (this.state.sidebarOpen === true)
      return (
        <div>
          <TopNav onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <Sidebar isOpen={this.state.sidebarOpen} />
            <Notification />
            <NotificationPlus onClick={this.handleModal} />
            {/* how to show and hide component
             https://stackoverflow.com/questions/28241912/bootstrap-modal-in-react-js
            accessed [3/12/18]  */}
            <div>
              {this.state.show ? (
                <Modal onClose={this.handleModal} open={this.state.show} center>
                  <div className="m-3">
                    <h1 className="">Configure New Notification</h1>
                    <form onSubmit={this.sendNotificationData}>
                      <div className="form-group">
                        <label>Device Name</label>
                        <input
                          value={this.state.deviceName}
                          name="deviceName"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="deviceNameHelp"
                          placeholder="Enter Device Name"
                        />
                        <small
                          id="deviceNameHelp"
                          className="form-text text-muted"
                        >
                          Make sure that this is descriptive of the device.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Device Type</label>
                        <select
                          name="deviceType"
                          onChange={this.handleChange}
                          value={this.state.deviceType}
                          className="form-control"
                          id="exampleSelect1"
                        >
                          <option value="SMS">SMS</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>

                      {/*
                      trigger_condition: triggerCon,
                      trigger_reading: triggerRead,*/}

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          value={this.state.message}
                          name="message"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="messageHelp"
                          placeholder="Enter Message"
                        />
                        <small
                          id="messageHelp"
                          className="form-text text-muted"
                        >
                          This is the message sent with the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Sensor</label>
                        <select
                          name="sensor"
                          onChange={this.handleChange}
                          value={this.state.sensor}
                          className="form-control"
                          id="exampleSelect1"
                        >
                          <option value="SMS">SMS</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <input
                            type="Submit"
                            defaultValue="Submit"
                            className="btn btn-primary ml-3"
                          />

                          {/* success feedback on sucessful db write */}
                          {this.state.success ? (
                            <div>
                              <i class="fas fa-check bg-success ml-4" />
                              <small className="form-text text-muted ml-4">
                                New notification successfully added to database
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      );
    else
      return (
        <div>
          <TopNav onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <Notification />
            <NotificationPlus onClick={this.handleModal} />
            {/* how to show and hide component
                 https://stackoverflow.com/questions/28241912/bootstrap-modal-in-react-js
                accessed [3/12/18]  */}
            <div>
              {this.state.show ? (
                <Modal onClose={this.handleModal} open={this.state.show} center>
                  <div className="m-3">
                    <h1 className="">Configure New Notification</h1>
                    <form onSubmit={this.sendNotificationData}>
                      <div className="form-group">
                        <label>Device Name</label>
                        <input
                          value={this.state.deviceName}
                          name="deviceName"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="deviceNameHelp"
                          placeholder="Enter Device Name"
                        />
                        <small
                          id="deviceNameHelp"
                          className="form-text text-muted"
                        >
                          Make sure that this is descriptive of the device.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Device Type</label>
                        <select
                          name="deviceType"
                          onChange={this.handleChange}
                          value={this.state.deviceType}
                          className="form-control"
                          id="exampleSelect1"
                        >
                          <option value="SMS">SMS</option>
                          <option value="Email">Email</option>
                        </select>
                      </div>

                      {/*
                      trigger_condition: triggerCon,
                      trigger_reading: triggerRead,*/}

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          value={this.state.message}
                          name="message"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="messageHelp"
                          placeholder="Enter Message"
                        />
                        <small
                          id="messageHelp"
                          className="form-text text-muted"
                        >
                          This is the message sent with the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Sensor</label>
                        <select
                          name="sensor"
                          onChange={this.handleChange}
                          value={this.state.sensor}
                          className="form-control"
                          id="exampleSelect1"
                        >
                          <option value="SMS">SMS</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <input
                            type="Submit"
                            defaultValue="Submit"
                            className="btn btn-primary ml-3"
                          />

                          {/* success feedback on sucessful db write */}
                          {this.state.success ? (
                            <div>
                              <i class="fas fa-check bg-success ml-4" />
                              <small className="form-text text-muted ml-4">
                                New notification successfully added to database
                              </small>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal>
              ) : null}
            </div>
          </div>
        </div>
      );
  }
}

export default Notifications;
