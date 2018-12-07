import React from "react";
import MemoryRouter from "react-router";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home.js";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it("should render the Home component", () => {
    expect(wrapper.find(Home));
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
