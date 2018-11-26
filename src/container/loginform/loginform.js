import React, { Component } from "react";
import firebase from "firebase";

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex =
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("test");

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(user) {
        console.log(user);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      password: ""
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
    return (
      <div>
        <div className="container col-6">
          <div className="main-login main-center ">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              {/* Email Section*/}
              <div className="form-group text-primary font-weight-bold">
                <label htmlFor="email" className="float-left control-label">
                  Email
                </label>
                <div className="input-group">
                  <button
                    type="button"
                    className="btn btn-default"
                    aria-label="Left Align"
                  >
                    <i className="fas fa-user" />
                  </button>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Please enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChanged}
                    required
                  />
                </div>
              </div>
              {/* Password Section */}
              <div className="form-group text-primary font-weight-bold">
                <label htmlFor="password" className="float-left control-label">
                  Password
                </label>
                <div className="input-group">
                  <button
                    type="button"
                    className="btn btn-default"
                    aria-label="Left Align"
                  >
                    <i className="fas fa-key" />
                  </button>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Please enter your password"
                    value={this.state.password}
                    onChange={this.handleInputChanged}
                    required
                  />
                </div>
              </div>
              <div className="login-register">
                <input
                  type="submit"
                  className="btn btn-primary round"
                  value="Login"
                  id="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;