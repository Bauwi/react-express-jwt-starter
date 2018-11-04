import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { startLogin } from "../actions/auth";

import CredentialsForm from "./lib/CredentialsForm";

const Main = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 90vh;
`;

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem 3rem;
  width: 350px;
`;

export class Login extends Component {
  render() {
    const { loginHasErrored } = this.props;
    return (
      <Main>
        <FormWrapper>
          <CredentialsForm
            title="Login"
            handleSubmit={credentials => this.props.startLogin(credentials)}
            buttonText="Log in"
            forgotPassword
            footer={<Link to="/register">register now!</Link>}
            isLoading={this.props.loginIsLoading}
            serverError={
              loginHasErrored && "Sorry, Your email or password is invalid."
            }
          />
        </FormWrapper>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  loginHasErrored: state.auth.loginHasErrored,
  loginIsLoading: state.auth.loginIsLoading
});

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
