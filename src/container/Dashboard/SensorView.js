import React, { Component } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import NavTop from "../../components/Dashboard/TopNav";
import Sensors from "../../components/Dashboard/SensorView";
import SensorPlus from "../../components/Dashboard/newSensorPlus";
import Modal from 'react-responsive-modal';
import postNewSensor from '../../utils/sensorCardQueries/sendSensorDetails';
import { withRouter } from "react-router-dom";

class SensorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
      show: false,
      sensorName: "",
      sensorType: "",
      success: false
    };
    this.handleModal = this.handleModal.bind(this);
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.sendSensorData = this.sendSensorData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleViewSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  sendSensorData(e) {
    const router = this.props;
    e.preventDefault();
    postNewSensor(this.state.sensorName, this.state.sensorType)
      .then((success) => {
        this.setState({success: true});
      });
      //   console.log("successful")
      //   this.setState({success: true});
      //   console.log(this.state.success)
      // });
  }

  render() {
    if (this.state.sidebarOpen === true)
      return (
        <div>
          <NavTop onClick={this.handleViewSidebar} />

          <div id="wrapper">
            <Sidebar isOpen={this.state.sidebarOpen} />
            <Sensors />
            <SensorPlus onClick={this.handleModal}/>
            {/* how to show and hide component 
             https://stackoverflow.com/questions/28241912/bootstrap-modal-in-react-js 
            accessed [3/12/18]  */}
            <div>
              {this.state.show ? (
                <Modal onClose={this.handleModal} open={this.state.show} center>
                <div className="m-3">
                  <h1 className="">Configure New Sensor</h1>
                  <form onSubmit={this.sendSensorData}>
                    <div className="form-group">
                      <label >Sensor Name</label>
                      <input type="sensor" value={this.state.sensorName} name="sensorName" onChange={this.handleChange} className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name" />
                      <small id="sensorNameHelp" className="form-text text-muted">Make this something unique and descriptive.</small>
                    </div>

                    <div className="form-group">
                      <label >Sensor Type</label>
                      <select  name="sensorType"onChange={this.handleChange} value={this.state.sensorType} className="form-control" id="exampleSelect1">
                        <option value="LIGHT">Lighting</option>
                        <option value="Humidity Sensors">Humidity Sensor</option>
                        <option value="Air Quality Sensor">Air Quality Sensor</option>
                        <option value="TEMP">Temperature</option>
                        <option value="RFI READER">RFI reader</option>
                      </select>
                    </div>

                    <div className="form-group">
                    <div className="row">
                    <input type="Submit" defaultValue="Submit" className="btn btn-primary ml-3"></input>

                    {/* success feedback on sucessful db write */}
                    {this.state.success ? (
                      <div>
                      <i class="fas fa-check bg-success ml-4"></i> 
                      <small className="form-text text-muted ml-4">New sensor successfully added to db</small>
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
            <Sensors />
            <SensorPlus onClick={this.handleModal}/>
            {/* how to show and hide component 
             https://stackoverflow.com/questions/28241912/bootstrap-modal-in-react-js 
            accessed [3/12/18]  */}
            <div>
              {this.state.show ? (
                <Modal onClose={this.handleModal} open={this.state.show} center>
                <div className="m-3">
                  <h1 className="">Configure New Sensor</h1>
                  <form onSubmit={this.sendSensorData}>
                    <div className="form-group">
                      <label >Sensor Name</label>
                      <input type="sensor" value={this.state.sensorName} name="sensorName" onChange={this.handleChange} className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name" />
                      <small id="sensorNameHelp" className="form-text text-muted">Make this something unique and descriptive.</small>
                    </div>

                    <div className="form-group">
                      <label >Sensor Type</label>
                      <select  name="sensorType"onChange={this.handleChange} value={this.state.sensorType} className="form-control" id="exampleSelect1">
                        <option value="Light">Light</option>
                        <option value="Humidity Sensors">Humidity Sensor</option>
                        <option value="Air Quality Sensor">Air Quality Sensor</option>
                        <option value="TEMP">TEMP</option>
                        <option value="RFI READER">RFI reader</option>
                      </select>
                    </div>
                    
                    <input type="Submit" value="Submit" className="btn btn-primary"></input>

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

export default withRouter(SensorView);
