import React, { Component } from "react";
import SignUpForm from "../../components/AuthenticationComponents/SignUpForm";
import firebase from "firebase";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            email: "",
            password: "",
            username: "",
            phoneNumber: ""

        };
    }



    handleSubmit = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(
                (user)=>{
                    if(user){
                        user.updateProfile({
                            username: this.state.username,
                            phoneNumber: this.state.phoneNumber
                        })
                    }
                })
            .catch(function(error) {
                console.log(error.code + " " + error.message);
            });
    };

    render() {
        return (
           <SignUpForm
           onSubmitForm={this.handleSubmit()}/>
        );
    }
}

export default Login;
