import {
  AUTH_USER_LOGGED_IN_ERROR,
  AUTH_USER_LOGGED_IN_LOADING,
  AUTH_USER_REGISTERED_ERROR,
  AUTH_USER_REGISTERED_LOADING,
  AUTH_USER_LOGGED_IN,
  AUTH_USER_LOGGED_OUT,
} from './actionTypes';

const authReducerInitialState = {
  user: {},
  loginIsLoading: false,
  loginHasErrored: false,
  registerIsLoading: false,
  registerHasErrored: false,
};

export default (state = authReducerInitialState, action) => {
  switch (action.type) {
    case AUTH_USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
      };
    case AUTH_USER_LOGGED_OUT:
      return authReducerInitialState;
    case AUTH_USER_LOGGED_IN_ERROR:
      return {
        ...state,
        loginHasErrored: action.bool,
      };
    case AUTH_USER_LOGGED_IN_LOADING:
      return {
        ...state,
        loginIsLoading: action.bool,
      };
    case AUTH_USER_REGISTERED_ERROR:
      return {
        ...state,
        registerHasErrored: action.bool,
      };
    case AUTH_USER_REGISTERED_LOADING:
      return {
        ...state,
        registerIsLoading: action.bool,
      };
    default:
      return state;
  }
};
