import React from "react";
import { mount } from "enzyme";
import firebase from "firebase";
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

  beforeAll(() => {
    props = {};
    mountedLogin = undefined;
  });
  beforeEach(() => {
    props = {};
    mountedLogin = undefined;
  });

  // All tests will go here

  it("always renders a div", () => {
    const divs = loginForm().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it.skip("calls login with correct email and password", () => {
    const emailTestValue = "test@test.com";
    const passwordTestValue = "thisisatest123";

    let email = loginForm().find({ name: "email" });
    email.instance().value = emailTestValue;
    email.simulate("change");

    let password = loginForm().find({ name: "password" });
    password.instance().value = passwordTestValue;
    password.simulate("change");

    mountedLogin.find("#submit").simulate("click");

    const authMock = jest.spyOn(firebase, "auth");

    expect(authMock.signInWithEmailAndPassword).toBeCalledWith(
      emailTestValue,
      passwordTestValue
    );
  });
});
