import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { startLogin } from "../actions/auth";

import CredentialsForm from "./lib/CredentialsForm";

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
`;

export class Login extends Component {
  render() {
    return (
      <div>
        <FormWrapper>
          <CredentialsForm
            title="Login"
            handleSubmit={credentials => this.props.startLogin(credentials)}
            buttonText="Log in"
            forgotPassword
            footer={<Link to="/register">register now!</Link>}
          />
        </FormWrapper>
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
