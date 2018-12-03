import React, { Component } from 'react'

class SensorForm extends Component {
  constructor(props){
    this.state = {
      modalOpen: false
    };

    this.handleViewModal = this.handleViewModal.bind(this);
  }
  handleViewModal() {
    console.log("brah")
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
  render() {
    return (
      <div>
        <i className="far fa-5x fa-plus-square icon-plus"
        onClick={() => {
          this.handleViewModal();
        }}>
        </i>
      </div>
    )
  }
}
  export default SensorForm;
