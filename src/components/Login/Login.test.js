import React from "react";
// enzyme allows me to render one component to standalone without context or the rest of the application
import MemoryRouter from "react-router";
import { configure } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "./Login.js";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
  // beforeEach takes a function as an arguement - it executes this function before every "it" jest test
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<Login />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should render the Login component", () => {
    // The code below is the expectation of the test
    expect(wrapper.find(Login));
  });
});
