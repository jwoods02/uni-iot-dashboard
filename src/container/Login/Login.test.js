import React from "react";
import MemoryRouter from "react-router";
import { configure } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Login } from "./Login.js";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  let wrapper;
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
    expect(wrapper.find(Login));
  });
});
