import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import setupFirebase from "./utils/firebaseSetup";
import Dashboard from "./container/Dashboard/Dashboard";

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
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
