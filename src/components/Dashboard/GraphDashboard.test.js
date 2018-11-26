import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import GraphDashboard from "./GraphDashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GraphDashboard />, div);
});

describe("<GraphDashboard />", () => {
  it("Matches a snapshot", () => {
    const gd = renderer.create(<GraphDashboard />).toJSON();
    expect(gd).toMatchSnapshot();
  });
});

// todo : component jest testing
