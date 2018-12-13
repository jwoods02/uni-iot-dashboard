import React, { Component } from "react";
import SignUpForm from "../../components/AuthenticationComponents/SignUpForm";
import firebase from "firebase";
import { Redirect } from "react-router";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            email: "",
            password: "",
            displayName: "",

        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit handled");
        let displayName = this.state.displayName;
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                let user = firebase.auth().currentUser;
                user.sendEmailVerification().then(function() {
                    alert("You have been sent an email verification")
                }).catch(function(error) {
                    console.log(error)
                });
                user.updateProfile({
                    displayName: displayName,
                })
                    .then(function() {
                        console.log("it worked")
                    })
                    .catch(function(error) {
                        console.log("it failed")
                    })
            })
            .then(
                this.setState({ redirect: true })
            )
            .catch(function(error) {
                console.log(error.code + " " + error.message);
            });


    };

    handleInputChanged = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    render() {
        const { from } = this.props.location.state || {
            from: { pathname: "/login" }
        };

        if (this.state.redirect === true) {
            return <Redirect to={from} />;
        }
        return (
            <SignUpForm
                onSubmitForm={this.handleSubmit}
                handleInputChanged={this.handleInputChanged}
            />
        );
    }
}

export default Login;
