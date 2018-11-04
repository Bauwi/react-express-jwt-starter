import React, { Component } from "react";
import { connect } from "react-redux";

import { startCreateAccount } from "../actions/auth";

export class Register extends Component {
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
    this.props.startCreateAccount({ email, password });
  };

  render() {
    return (
      <div>
        <h1>Create an account</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.email} onChange={this.onEmailChange} />
          <input value={this.state.password} onChange={this.onPasswordChange} />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  startCreateAccount: credentials => dispatch(startCreateAccount(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
