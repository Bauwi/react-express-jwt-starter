import axios from "axios";

const loginHasErrored = (bool, err) => ({
  type: "LOGIN_HAS_ERRORED",
  bool
});

const loginIsLoading = bool => ({
  type: "LOGIN_IS_LOADING",
  bool
});

export const login = user => ({
  type: "LOGIN",
  user
});

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogin = credentials => async dispatch => {
  dispatch(loginIsLoading(true));
  try {
    const response = await axios.post(`/api/users/login`, credentials);

    await dispatch(login(response.data));
    await sessionStorage.setItem("user", JSON.stringify(response.data));

    dispatch(loginIsLoading(false));
  } catch (error) {
    dispatch(loginIsLoading(false));
    dispatch(loginHasErrored(true));
    throw new Error("Unable to login", error);
  }
};

export const startLogout = () => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/users/me/token`, {
      headers: { "x-auth": getState().auth.user.token }
    });

    sessionStorage.removeItem("user");
    dispatch(logout());
  } catch (error) {
    throw new Error("Unable to log out", error);
  }
};

export const startCreateAccount = credentials => async dispatch => {
  try {
    await axios.post(`/api/users`, credentials);
    dispatch(
      startLogin({ email: credentials.email, password: credentials.password })
    );
  } catch (error) {
    throw new Error("Unable to create an account", error);
  }
};
