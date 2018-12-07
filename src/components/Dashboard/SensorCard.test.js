import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import SensorCard from "./SensorCard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SensorCard />, div);
});

describe("<SensorCard />", () => {
  it("Matches a snapshot", () => {
    const sc = renderer.create(<SensorCard />).toJSON();
    expect(sc).toMatchSnapshot();
  });
});
