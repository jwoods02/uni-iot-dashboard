import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Nav from "./components/Nav";
import TopNav from "./components/Dashboard/TopNav";
import LoginForm from "./container/loginform/loginform";

import setupFirebase from "./utils/firebaseSetup";

class App extends Component {
  constructor(props) {
    super(props);
    setupFirebase();
  }
  render() {
    return (
      <div>
        <TopNav />
        <Nav />
      </div>
    );
  }
}

export default App;
