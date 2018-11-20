import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Dashboard/Nav";
import TopNav from "./components/Dashboard/TopNav";
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
