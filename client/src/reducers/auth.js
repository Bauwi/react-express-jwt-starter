import {
  LOGIN_HAS_ERRORED,
  LOGIN_IS_LOADING,
  REGISTER_HAS_ERRORED,
  REGISTER_IS_LOADING,
  LOGIN,
  LOGOUT
} from "../actions/types";

const authReducerInitialState = {
  user: {},
  loginIsLoading: false,
  loginHasErrored: false,
  registerIsLoading: false,
  registerHasErrored: false
};

export default (state = authReducerInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user
      };
    case LOGOUT:
      return authReducerInitialState;
    case LOGIN_HAS_ERRORED:
      return {
        ...state,
        loginHasErrored: action.bool
      };
    case LOGIN_IS_LOADING:
      return {
        ...state,
        loginIsLoading: action.bool
      };
    case REGISTER_HAS_ERRORED:
      return {
        ...state,
        registerHasErrored: action.bool
      };
    case REGISTER_IS_LOADING:
      return {
        ...state,
        registerIsLoading: action.bool
      };
    default:
      return state;
  }
};
