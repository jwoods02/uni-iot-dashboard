import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Nav from "./components/Nav";
import TopNav from "./components/Dashboard/TopNav";
import loginform from "./container/loginform/loginform";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import setupFirebase from "./utils/firebaseSetup";

class App extends Component {
  constructor(props) {
    super(props);
    setupFirebase();
  }
  render() {
    return (
      <div>
        <Router>
            <div className="sans-serif">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={loginform} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
