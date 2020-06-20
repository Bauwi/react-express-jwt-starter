import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startCreateAccount } from '../actions';

import CredentialsForm from 'common/components/CredentialsForm';

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  padding: 1rem 3rem;
  width: 350px;
`;

export class Register extends Component {
  render() {
    const { registerHasErrored } = this.props;
    return (
      <Main>
        <FormWrapper>
          <CredentialsForm
            title="Sign up"
            handleSubmit={(credentials) =>
              this.props.startCreateAccount(credentials)
            }
            askUser
            buttonText="Sign up"
            footer={<Link to="/">I have an account</Link>}
            serverError={registerHasErrored && 'This account already exists.'}
          />
        </FormWrapper>
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({
  registerHasErrored: state.auth.registerHasErrored,
  registerIsLoading: state.auth.registerIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  startCreateAccount: (credentials) =>
    dispatch(startCreateAccount(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
