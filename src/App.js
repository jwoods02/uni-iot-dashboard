import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import TopNav from "./components/TopNav";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        {/* <div className="App">
        <header className="App-header"> */}
        <TopNav />
        <Nav />
        {/* </header>
      // </div>*/}
      </div>
    );
  }
}

export default App;
