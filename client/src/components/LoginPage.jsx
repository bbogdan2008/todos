import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/users';

class LoginPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("dispatch login action");
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(login(username, password));
    }
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
          </div>
          <div>
            <button className="btn btn-primary">Login</button>
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, null)(LoginPage);