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
        {/* <div className="App">
        <header className="App-header"> */}
        <TopNav />
        <Nav />
        {/* <Cards /> */}
        {/* </header>
      // </div>*/}
      </div>
    );
  }
}

export default App;
