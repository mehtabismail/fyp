import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Successfull from './Components/Successfull';
import Header from './Components/Header'

import Admin from './Components/Admin';
import Test from './Components/Test'

function App() {
  return (
    <Router>
      <div >
      <Switch >
              <Route exact path='/' component={Login} className="auth.inner"/>
              <Route path="/sign-in" component={Login} className="auth.inner"/>
              <Route path="/sign-up" component={SignUp} className="auth.inner"/>
              <Route path="/success" component={Successfull} />
              <Route path="/admin" component={Admin} />
            </Switch>
      </div>
           
         
    </Router>
    // <Test />
  );
}

export default App;
