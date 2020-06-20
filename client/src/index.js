import './index.css';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppRouter from './routers/AppRouter';
import Loader from 'common/components/Loaders/Loader';

import { login } from 'features/auth/actions';

const user = JSON.parse(localStorage.getItem('user'));

const store = configureStore();

if (user && user.token) {
  store.dispatch(login(user));
}

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// check if app has already been rendered to avoid useless re-rendering
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loader />, document.getElementById('root'));
renderApp();
