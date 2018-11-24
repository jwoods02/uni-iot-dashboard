import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Login from "./container/Login/Login";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import setupFirebase from "./utils/firebaseSetup";
import Dashboard from "./container/Dashboard/Dashboard";
import {Redirect} from "react-router";

function AuthenticatedRoute({component: Component, authenticated, ...rest}){
    return(
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} {...rest} />
                : <Redirect to="/login" /> } />
    )
}

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
              <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
