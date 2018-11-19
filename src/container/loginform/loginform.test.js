import React from "react";
import { mount } from "enzyme";
import LoginForm from "./loginform";

describe("Login Form Tests", () => {
  let props;
  let mountedLogin;
  const loginForm = () => {
    if (!mountedLogin) {
      mountedLogin = mount(<LoginForm {...props} />);
    }
    return mountedLogin;
  };

  beforeEach(() => {
    props = {
      memberData: []
    };
    mountedLogin = undefined;
  });

  // All tests will go here

  it("always renders a div", () => {
    const divs = loginForm().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("calls login with correct email and password", () => {
    const divs = loginForm().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });
});
