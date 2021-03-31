import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Successfull from './Components/Successfull';
import Header from './Components/Header'

import Admin from './Components/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
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
        <div className="auth-wrapper">
          <div >
            <Switch >
              <Route exact path='/' component={Login} className="auth.inner"/>
              <Route path="/sign-in" component={Login} className="auth.inner"/>
              <Route path="/sign-up" component={SignUp} className="auth.inner"/>
              <Route path="/success" component={Successfull} />
              <Route path="/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
