import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Successfull from "./Successfull";
import "./new.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
        this.loginButton = this.loginButton.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    nextPath(path) {
        this.props.history.push(path);
    }

    handleChange(event) {
        this.setState({ email: event.target.email });
    }


    loginButton() {
        let a = this.state.email;
        alert(a);
        console.log(a);
    }


    render() {


        return (
            <div className="containerTest1">
                <div style={{display:"flex"}}>
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
                            <h3>Sign In</h3>
                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" onChange={(email) => this.setState(email)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={(email) => this.setState(email)} />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" onClick={() => this.nextPath('/admin')}>Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);