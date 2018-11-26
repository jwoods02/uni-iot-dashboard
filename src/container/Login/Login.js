import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "firebase";
import * as ROUTES from "../../constants/routes";
import {Redirect} from "react-router";

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect : false,
      email: "",
      password: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);

    firebase
      .auth()
      .signOut()
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSubmit(event) {

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(user) {
        console.log(user);
        console.log("successful login");

        // james please pick this up
        localStorage.setItem('user', user);
      })
      .catch(function(error) {
        console.log("unsuccessful login");
        alert(error);
      });
    event.preventDefault();

    this.setState({
      password: ""
    });

    firebase.auth().onAuthStateChanged(user => {

      if (user) {
          console.log("changing page");
          this.setState({redirect: true})
      }
    });
  }

  handleInputChanged(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
      const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }

      if (this.state.redirect === true) {
          return <Redirect to={from} />
      }

    return (
      <div>
        <div className="container">
          <div className="card card-login mx-auto mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                {/* Email Section*/}
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="email"
                      name="email"
                      id="inputEmail"
                      value={this.state.email}
                      onChange={this.handleInputChanged}
                      className="form-control"
                      placeholder="Email address"
                      required="required"
                      autoFocus="autoFocus"
                    />
                    <label for="inputEmail">Email address</label>
                  </div>
                </div>
                {/* Password Section */}
                <div className="form-group">
                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChanged}
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required="required"
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me" />
                      Remember Password
                    </label>
                  </div>
                </div>
                {/* <div className=""> */}
                {/* <Link to="/dashboard"> */}
                <input
                  className="btn btn-primary btn-block "
                  type="submit"
                  className="btn btn-primary round"
                  value="Login"
                  id="submit"
                />
                {/* </Link> */}
                {/* </div> */}

                {/* <a className="btn btn-primary btn-block" type="submit" value="Login" id="submit">Login</a> */}
              </form>
              <div className="text-center">
                <a className="d-block small mt-3" href="register.html">
                  Register an Account
                </a>
                <a className="d-block small" href="forgot-password.html">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;
