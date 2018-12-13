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
import DocumentationHome from "./container/Documentation/DocumentationHome";
import SensorDetails from "./container/Dashboard/SensorDetails";
import SignUp from "./container/Login/SignUp";
import DocumentationSection from "./container/Documentation/DocumentationSection";
import DocumentationArticle from "./container/Documentation/DocumentationArticle";

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

  setCurrentUser() {
    firebase.auth().onAuthStateChanged(function(user) {
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
    });
  }

  componentWillMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user
        });

        user.providerData.forEach(function(profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Dispay Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null
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

            <Route
              exact
              path="/dashboard/sensor/:id"
              component={SensorDetails}
            />
            <Route exact path="/dashboard/sensors" component={SensorView} />
            <Route exact path="/documentation" component={DocumentationHome} />
            <Route
              exact
              path="/documentation/section/:id"
              component={DocumentationSection}
            />
            <Route
              exact
              path="/documentation/article/:id"
              component={DocumentationArticle}
            />
            <Route exact path="/register" component={SignUp} />
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
