import React, { Component } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import NavTop from "../../components/Dashboard/TopNav";
import SensorDetails from "../../components/Dashboard/SensorDetails";
import NotificationPlus from "../../components/Dashboard/newSensorPlus";
import Modal from "react-responsive-modal";
import postNewNotification from "../../utils/sendNotificationDetails";
import getDataBySensorName from "../../utils/sensorCardQueries/getDataBySensorName";

const numValid = "^[0-9]*$";
class SensorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      contactDetail: "",
      contactType: "",
      title: "",
      message: "",
      triggerCon: "",
      triggerNum: "",
      data: []
    };
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendNotificationData = this.sendNotificationData.bind(this);
  }

  componentWillMount() {
    let url = window.location.pathname;
    var sensorName = url.substring(url.lastIndexOf("/") + 1, url.length);
    this.getData(sensorName);
  }

  getData(sensorName) {
    getDataBySensorName(sensorName).then(result => {
      this.setState({
        data: result
      });
    });
    // console.log("date object ____", this.state.data.last_updated.toString());
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
    e.preventDefault();
    console.log("send data", this.state.data.id);
    postNewNotification(
      this.state.contactDetail,
      this.state.contactType,
      this.state.title,
      this.state.message,
      this.state.triggerCon,
      this.state.triggerNum,
      this.state.data.id
    ).then(success => {
      this.setState({ success: true });
    });
  }

  render() {
    if (this.state.sidebarOpen === true)
      return (
        <div>
          <NavTop onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <Sidebar isOpen={this.state.sidebarOpen} />
            <SensorDetails />
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
                        <label>Contact Detail</label>
                        <input
                          value={this.state.contactDetail}
                          name="contactDetail"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="contactDetailHelp"
                          placeholder="Enter Contact Detail"
                          required
                        />
                        <small
                          id="contactDetailHelp"
                          className="form-text text-muted"
                        >
                          This is the contact detail that will be used to notify
                          you.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Contact Type</label>
                        <select
                          name="contactType"
                          onChange={this.handleChange}
                          value={this.state.contactType}
                          className="form-control"
                          id="exampleSelect1"
                          required
                        >
                          <option value="">Choose a contact type</option>
                          <option value="Email">Email</option>
                          <option value="SMS">SMS</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Title</label>
                        <input
                          value={this.state.title}
                          name="title"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="titleHelp"
                          placeholder="Enter Title"
                          required
                        />
                        <small id="titleHelp" className="form-text text-muted">
                          This is the title of the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          value={this.state.message}
                          name="message"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="messageHelp"
                          placeholder="Enter Message"
                          required
                        />
                        <small
                          id="messageHelp"
                          className="form-text text-muted"
                        >
                          This is the message sent with the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Trigger Condition</label>
                        <div className="row ml-2">
                          <select
                            name="triggerCon"
                            value={this.state.triggerCon}
                            onChange={this.handleChange}
                            required
                          >
                            <option value="">Choose</option>
                            <option value="<">{"<"}</option>
                            <option value=">">{">"}</option>
                            <option value="==">{"=="}</option>
                            <option value="!=">{"!="}</option>
                          </select>
                          <input
                            value={this.state.triggerNum}
                            pattern={numValid}
                            name="triggerNum"
                            onChange={this.handleChange}
                            className="form-control ml-3"
                            aria-describedby="triggerHelp"
                            style={{ maxWidth: 80 + "px" }}
                            required
                          />
                        </div>
                        <small
                          id="triggerHelp"
                          className="form-text text-muted"
                        >
                          Choose whether the condition is less than, greater
                          than or equal to and then type a number in the box to
                          compare against.
                        </small>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <input
                            type="Submit"
                            defaultValue="Submit"
                            className="btn btn-primary ml-3"
                            required
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
          <NavTop onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <SensorDetails />
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
                        <label>Contact Detail</label>
                        <input
                          value={this.state.contactDetail}
                          name="contactDetail"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="contactDetailHelp"
                          placeholder="Enter Contact Detail"
                          required
                        />
                        <small
                          id="contactDetailHelp"
                          className="form-text text-muted"
                        >
                          This is the contact detail that will be used to notify
                          you.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Contact Type</label>
                        <select
                          name="contactType"
                          onChange={this.handleChange}
                          value={this.state.contactType}
                          className="form-control"
                          id="exampleSelect1"
                          required
                        >
                          <option value="">Choose a contact type</option>
                          <option value="Email">Email</option>
                          <option value="SMS">SMS</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Title</label>
                        <input
                          value={this.state.title}
                          name="title"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="titleHelp"
                          placeholder="Enter Title"
                          required
                        />
                        <small id="titleHelp" className="form-text text-muted">
                          This is the title of the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          value={this.state.message}
                          name="message"
                          onChange={this.handleChange}
                          className="form-control"
                          aria-describedby="messageHelp"
                          placeholder="Enter Message"
                          required
                        />
                        <small
                          id="messageHelp"
                          className="form-text text-muted"
                        >
                          This is the message sent with the notification.
                        </small>
                      </div>

                      <div className="form-group">
                        <label>Trigger Condition</label>
                        <div className="row ml-2">
                          <select
                            name="triggerCon"
                            value={this.state.triggerCon}
                            onChange={this.handleChange}
                            required
                          >
                            <option value="">Choose</option>
                            <option value="<">{"<"}</option>
                            <option value=">">{">"}</option>
                            <option value="==">{"=="}</option>
                            <option value="!=">{"!="}</option>
                          </select>
                          <input
                            value={this.state.triggerNum}
                            pattern={numValid}
                            name="triggerNum"
                            onChange={this.handleChange}
                            className="form-control"
                            aria-describedby="triggerHelp"
                            style={{ maxWidth: 80 + "px" }}
                            required
                          />
                        </div>
                        <small
                          id="triggerHelp"
                          className="form-text text-muted"
                        >
                          Choose whether the condition is less than, greater
                          than or equal to and then type a number in the box to
                          compare against.
                        </small>
                      </div>

                      <div className="form-group">
                        <div className="row">
                          <input
                            type="Submit"
                            defaultValue="Submit"
                            className="btn btn-primary ml-3"
                            required
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

export default SensorView;
