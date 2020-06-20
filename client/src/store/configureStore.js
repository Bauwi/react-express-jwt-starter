import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from 'features/auth/reducer';

// Add redux devtools support
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
