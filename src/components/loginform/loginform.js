import React from "react";

// todo if we are going to have the option to register then this form can be altered with props
const LoginForm = (props) => {
    return (
        <div>
            <div className="container col-6">
                    <div className="main-login main-center ">
                        <form className="form-horizontal" method="post" action="#">

                            <div className="form-group text-primary font-weight-bold ">
                                <label htmlFor="CommunityID" className="float-left control-label ">Community ID</label>
                                <div className=" input-group">

                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <i className="fas fa-globe-americas"></i>
                                    </button>

                                        <input type="text" className="form-control"  id="communityID"
                                               placeholder="Please enter your community ID"/>
                                </div>
                            </div>

                            <div className="form-group text-primary font-weight-bold">
                                <label htmlFor="personalID" className="float-left control-label">Personal ID</label>
                                <div className="input-group">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <i className="fas fa-user"></i>
                                    </button>
                                        <input type="text" className="form-control" id="personalID"
                                               placeholder="Please enter your personal ID"/>
                                </div>
                            </div>

                            <div className="form-group text-primary font-weight-bold">
                                <label htmlFor="password" className="float-left control-label">Password</label>
                                <div className="input-group">
                                    <button type="button" className="btn btn-default" aria-label="Left Align">
                                        <i className="fas fa-key"></i>
                                    </button>
                                        <input type="text" className="form-control" name="password" id="password"
                                               placeholder="Please enter your password"/>
                                    </div>
                                </div>
                            <div className="login-register">
                                <button className="btn btn-primary round">Login</button>
                            </div>
                        </form>
                        </div>
                    </div>
            </div>
    )
};

export default LoginForm;