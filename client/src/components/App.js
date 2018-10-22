import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../helpers/history';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import PrivateRoute from './PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </div>
      </Router>
    );
  }
}

export default App;
