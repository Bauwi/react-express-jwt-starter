import axios from 'axios';

import {
  AUTH_USER_LOGGED_IN_ERROR,
  AUTH_USER_LOGGED_IN_LOADING,
  AUTH_USER_REGISTERED_ERROR,
  AUTH_USER_REGISTERED_LOADING,
  AUTH_USER_LOGGED_IN,
  AUTH_USER_LOGGED_OUT,
} from './actionTypes';

const loginHasErrored = (bool, err) => ({
  type: AUTH_USER_LOGGED_IN_ERROR,
  bool,
});

const loginIsLoading = (bool) => ({
  type: AUTH_USER_LOGGED_IN_LOADING,
  bool,
});

const registerHasErrored = (bool, err) => ({
  type: AUTH_USER_REGISTERED_ERROR,
  bool,
});

const registerIsLoading = (bool) => ({
  type: AUTH_USER_REGISTERED_LOADING,
  bool,
});

export const login = (user) => ({
  type: AUTH_USER_LOGGED_IN,
  user,
});

export const logout = () => ({
  type: AUTH_USER_LOGGED_OUT,
});

export const startLogin = (credentials) => async (dispatch) => {
  dispatch(loginIsLoading(true));
  try {
    const response = await axios.post(`/api/users/login`, credentials);

    await dispatch(login(response.data));
    await localStorage.setItem('user', JSON.stringify(response.data));

    dispatch(loginIsLoading(false));
  } catch (error) {
    dispatch(loginIsLoading(false));
    dispatch(loginHasErrored(true));
  }
};

export const startLogout = () => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/users/me/token`, {
      headers: { 'x-auth': getState().auth.user.token },
    });

    localStorage.removeItem('user');
    dispatch(logout());
  } catch (error) {
    throw new Error('Unable to log out', error);
  }
};

export const startCreateAccount = (credentials) => async (dispatch) => {
  dispatch(registerIsLoading(true));
  try {
    await axios.post(`/api/users`, credentials);
    dispatch(
      startLogin({ email: credentials.email, password: credentials.password })
    );

    dispatch(registerIsLoading(false));
  } catch (error) {
    dispatch(registerIsLoading(false));
    dispatch(registerHasErrored(true));
  }
};
