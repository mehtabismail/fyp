import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        let a= this.state.email;
        alert(a);
        console.log(a);
    }


    render() {


        return (
            <div className="auth-inner">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(email)=>this.setState(email)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(email)=>this.setState(email)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={() => this.nextPath('/admin') }>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
        );
    }
}

export default withRouter(Login);