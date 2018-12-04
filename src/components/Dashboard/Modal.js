import React, { Component } from "react";
import "../../../src/App.css";
import Modal from "react-modal";

class ModalMenu extends Component {
  componentDidMount() {
    // $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
  }
  render() {
    return (
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        // aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                onClick={this.props.onClick}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalMenu;
