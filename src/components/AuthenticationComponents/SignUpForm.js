import React from "react";

const SignUpForm = (props) => {

    return(
        <div>
            <div id="homeWrapper">
                <div className="container">
                    <form onSubmit={props.onSubmitForm} className="text-white">
                        {/* Name Section*/}
                        <div className="form-group">
                            <div className="form-label-group">
                                <input
                                    id="displayName"
                                    name="displayName"
                                    onChange={props.handleInputChanged}
                                    className="form-control text-center"
                                    placeholder="Create a username"
                                    required="required"
                                    autoFocus="autoFocus"
                                />
                            </div>
                        </div>

                        {/* Email Section*/}
                        <div className="form-group">
                            <div className="form-label-group">
                                <input
                                    type="email"
                                    name="email"
                                    id="inputEmail"
                                    onChange={props.handleInputChanged}
                                    className="form-control text-center"
                                    placeholder="Enter your email address"
                                    required="required"
                                    autoFocus="autoFocus"
                                />
                            </div>
                        </div>


                        {/* Password Section */}
                        <div className="form-group">
                            <div className="form-label-group">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={props.handleInputChanged}
                                    id="inputPassword"
                                    className="form-control text-center"
                                    placeholder="Create a password"
                                    required="required"
                                />
                            </div>
                        </div>


                        {/* Phone Number Section*/}
                        {/*<div className="form-group">*/}
                            {/*<div className="form-label-group">*/}
                                {/*<input*/}
                                    {/*id="inputPhoneNumber"*/}
                                    {/*name="phoneNumber"*/}
                                    {/*onChange={props.handleInputChanged}*/}
                                    {/*className="form-control text-center"*/}
                                    {/*placeholder="Enter your phone number"*/}
                                    {/*required="required"*/}
                                    {/*autoFocus="autoFocus"*/}
                                {/*/>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <input
                            className="btn btn-primary btn-block btn btn-primary round"
                            type="submit"
                            className="btn btn-primary round"
                            value="Register"
                            id="submit"
                        />
                    </form>
                </div>
            </div>


        </div>
    )
};

export default SignUpForm;
