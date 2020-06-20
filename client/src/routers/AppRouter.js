import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Login from 'features/auth/components/Login';
import Register from 'features/auth/components/Register';
import Dashboard from 'features/dashboard/components/Dashboard';
import NotFoundPage from 'features/notFound/components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PublicRoute path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
