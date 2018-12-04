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
        console.log("submit handled");
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
    //
    // handleInputChanged = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;
    //
    //     this.setState({
    //         [name]: value
    //     });
    // };

    render() {
        return (
           <SignUpForm
           onSubmitForm={this.handleSubmit()}
           // handleInputChanged={this.handleInputChanged()}
           />
        );
    }
}

export default Login;
