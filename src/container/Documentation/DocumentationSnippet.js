import React, { Component } from "react";

export default class DocumentationSnippet extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
