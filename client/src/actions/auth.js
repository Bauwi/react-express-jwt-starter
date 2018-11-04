import axios from "axios";

import {
  LOGIN_HAS_ERRORED,
  LOGIN_IS_LOADING,
  REGISTER_HAS_ERRORED,
  REGISTER_IS_LOADING,
  LOGIN,
  LOGOUT
} from "./types";

const loginHasErrored = (bool, err) => ({
  type: LOGIN_HAS_ERRORED,
  bool
});

const loginIsLoading = bool => ({
  type: LOGIN_IS_LOADING,
  bool
});

const registerHasErrored = (bool, err) => ({
  type: REGISTER_HAS_ERRORED,
  bool
});

const registerIsLoading = bool => ({
  type: REGISTER_IS_LOADING,
  bool
});

export const login = user => ({
  type: LOGIN,
  user
});

export const logout = () => ({
  type: LOGOUT
});

export const startLogin = credentials => async dispatch => {
  dispatch(loginIsLoading(true));
  try {
    const response = await axios.post(`/api/users/login`, credentials);

    await dispatch(login(response.data));
    await localStorage.setItem("user", JSON.stringify(response.data));

    dispatch(loginIsLoading(false));
  } catch (error) {
    dispatch(loginIsLoading(false));
    dispatch(loginHasErrored(true));
  }
};

export const startLogout = () => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/users/me/token`, {
      headers: { "x-auth": getState().auth.user.token }
    });

    localStorage.removeItem("user");
    dispatch(logout());
  } catch (error) {
    throw new Error("Unable to log out", error);
  }
};

export const startCreateAccount = credentials => async dispatch => {
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
