import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { startLogin } from '../actions';

import CredentialsForm from 'common/components/CredentialsForm';

const Login = () => {
  const dispatch = useDispatch();
  const loginHasErrored = useSelector((state) => state.auth.loginHasErrored);
  const loginIsLoading = useSelector((state) => state.auth.loginIsLoading);

  const handleLogin = (credentials) => {
    dispatch(startLogin(credentials));
  };
  return (
    <Main>
      <FormWrapper>
        <CredentialsForm
          title="Login"
          handleSubmit={(credentials) => handleLogin(credentials)}
          buttonText="Log in"
          forgotPassword
          footer={<Link to="/register">register now!</Link>}
          isLoading={loginIsLoading}
          serverError={
            loginHasErrored && 'Sorry, Your email or password is invalid.'
          }
        />
      </FormWrapper>
    </Main>
  );
};

export default Login;

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
