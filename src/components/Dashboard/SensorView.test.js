import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SensorView from "./SensorView";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SensorView />, div);
});

describe("<SensorView />", () => {
  it("Matches a snapshot", () => {
    const sv = renderer.create(<SensorView />).toJSON();
    expect(sv).toMatchSnapshot();
  });
});
