import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { history } from '../helpers/history';

import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import LoginPage from '../users/components/LoginPage';
import RegisterPage from '../users/components/RegisterPage';

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
