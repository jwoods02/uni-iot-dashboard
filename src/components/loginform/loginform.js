import React, { Component } from 'react';
import firebase from "firebase";
import apikey from "../../firebase.js";


// todo if we are going to have the option to register then this form can be altered with props
class LoginForm extends Component {

    constructor(props) {
        super(props);

        // Initializing app
        let config = {
            apiKey: apikey,
            authDomain: "fir-test-6e084.firebaseapp.com",
            databaseURL: "https://fir-test-6e084.firebaseio.com",
            storageBucket: "fir-test-6e084.appspot.com"
        };
        firebase.initializeApp(config);
    }


    login(event) {
        event.preventDefault();
        console.log("test");

        firebase.auth().signInWithEmailAndPassword("test@test.com", "testTEST")
            .then(function(user) {
              console.log(user)
            })
            .catch(function (error) {
            // todo Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                <div className="container col-6">
                    <div className="main-login main-center ">
                        <form className="form-horizontal" onSubmit={this.login}>

                            {/*<div className="form-group text-primary font-weight-bold ">*/}
                            {/*<label htmlFor="CommunityID" className="float-left control-label ">Community ID</label>*/}
                            {/*<div className=" input-group">*/}

                            {/*<button type="button" className="btn btn-default" aria-label="Left Align">*/}
                            {/*<i className="fas fa-globe-americas"/>*/}
                            {/*</button>*/}

                            {/*<input type="text" className="form-control"  id="communityID"*/}
                            {/*placeholder="Please enter your community ID"/>*/}
                            {/*</div>*/}
                            {/*</div>*/}


                            {/*todo change back from email to persnal ID or change the id and htmlFor*/}
                            <div className="form-group text-primary font-weight-bold">
                                <label htmlFor="personalID" className="float-left control-label">Email</label>
                                <div className="input-group">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <i className="fas fa-user"/>
                                    </button>
                                    <input type="text" className="form-control" id="personalID"
                                           placeholder="Please enter your personal ID"/>
                                </div>
                            </div>

                            <div className="form-group text-primary font-weight-bold">
                                <label htmlFor="password" className="float-left control-label">Password</label>
                                <div className="input-group">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <i className="fas fa-key"/>
                                    </button>
                                    <input type="text" className="form-control" name="password" id="password"
                                           placeholder="Please enter your password"/>
                                </div>
                            </div>
                            <div className="login-register">
                                <input type="submit" className="btn btn-primary round" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    };
}

export default LoginForm;