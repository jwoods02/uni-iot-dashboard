import React, { Component } from "react";

class NewItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <i
          className="far fa-5x fa-plus-square icon-plus"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
export default NewItemModal;
