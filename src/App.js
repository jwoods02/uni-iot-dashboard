import React, { Component } from "react";
import "./App.css";
import LoginForm from "./container/loginform/loginform";
import setupFirebase from "./utils/firebaseSetup";

class App extends Component {
  constructor(props) {
    super(props);
    setupFirebase();
  }
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
