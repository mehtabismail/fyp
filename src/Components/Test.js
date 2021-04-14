import React from 'react'
import Header from './Header'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function test() {
    return (
        <div className="containerTest1">
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

    )
}

export default test




// style={{ height: "92vh", backgroundColor: "black", marginRight: "170vh", marginTop: "8vh" }}