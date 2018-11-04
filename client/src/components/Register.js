import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { startCreateAccount } from "../actions/auth";

import CredentialsForm from "./lib/CredentialsForm";

const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 90vh;
`;

export class Register extends Component {
  render() {
    const { registerHasErrored } = this.props;
    return (
      <div>
        <FormWrapper>
          <CredentialsForm
            title="Register"
            handleSubmit={credentials =>
              this.props.startCreateAccount(credentials)
            }
            askUser
            buttonText="Register"
            footer={<Link to="/">I have an account</Link>}
            serverError={registerHasErrored && "This account already exists."}
          />
        </FormWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerHasErrored: state.auth.registerHasErrored,
  registerIsLoading: state.auth.registerIsLoading
});

const mapDispatchToProps = dispatch => ({
  startCreateAccount: credentials => dispatch(startCreateAccount(credentials))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
