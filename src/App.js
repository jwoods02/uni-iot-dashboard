import React, { Component } from "react";
import "./App.css";
import Home from "./components/Homepage/Home";
import Login from "./container/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import setupFirebase from "./utils/firebaseSetup";
import Dashboard from "./container/Dashboard/Dashboard";
import { Redirect } from "react-router";
import firebase from "firebase";
import Notifications from "./container/Dashboard/Notifications";
import SensorView from "./container/Dashboard/SensorView";
import Tables from "./container/Dashboard/Tables";

function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    setupFirebase();
    this.state = {
      authenticated: false,
      currentUser: null
    };
  }

  setCurrentUser(user) {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      });
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      });
    }
  }

  componentWillMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render() {
    return (
      <div>
        <Router>
          <div className="sans-serif">
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={props => {
                return (
                  <Login setCurrentUser={this.setCurrentUser} {...props} />
                );
              }}
            />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/tables" component={Tables} />
            <Route
              exact
              path="/dashboard/notifications"
              component={Notifications}
            />
            <Route exact path="/dashboard/sensors" component={SensorView} />
            {/* <AuthenticatedRoute
              requireAuth={true}
              authenticated={this.state.authenticated}
              exact
              path="/dashboard"
              component={Dashboard}
            /> */}
            {/*todo comment during development*/}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
