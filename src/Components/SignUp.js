import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./new.css";

export default class SignUp extends Component {
    render() {
        return (
            <div className="containerTest1">
                <div className="top-container">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container" style={{
                            backgroundColor: "white" }}>
                            <Link className="navbar-brand" to={"/sign-in"}>Medical Report System</Link>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}