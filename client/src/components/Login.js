import React, { Component } from "react";
import { connect } from "react-redux";

import { startLogin } from "../actions/auth";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onEmailChange = e => {
    const { value } = e.target;
    this.setState(() => ({ email: value }));
  };

  onPasswordChange = e => {
    const { value } = e.target;
    this.setState(() => ({ password: value }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.startLogin({ email, password });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.email} onChange={this.onEmailChange} />
          <input value={this.state.password} onChange={this.onPasswordChange} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
