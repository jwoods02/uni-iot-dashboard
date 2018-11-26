import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Nav from "./components/Nav";
import TopNav from "./components/Dashboard/TopNav";
import LoginForm from "./container/loginform/loginform";

import setupFirebase from "./utils/firebaseSetup";
import Graph from "./components/Graph/Graph";

class App extends Component {
  constructor(props) {
    super(props);
    setupFirebase();
  }
  render() {
    return (
      <div>
        {/*<TopNav />*/}
        {/*<Nav />*/}
            <Graph/>
      </div>
    );
  }
}

export default App;
