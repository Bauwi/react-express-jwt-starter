import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { startCreateAccount } from '../actions';

import CredentialsForm from 'common/components/CredentialsForm';

const Register = () => {
  const dispatch = useDispatch();
  const registerHasErrored = useSelector(
    (state) => state.auth.registerHasErrored
  );

  const handleRegister = (credentials) => {
    dispatch(startCreateAccount(credentials));
  };

  return (
    <Main>
      <FormWrapper>
        <CredentialsForm
          title="Sign up"
          handleSubmit={(credentials) => handleRegister(credentials)}
          askUser
          buttonText="Sign up"
          footer={<Link to="/">I have an account</Link>}
          serverError={registerHasErrored && 'This account already exists.'}
        />
      </FormWrapper>
    </Main>
  );
};
export default Register;

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
