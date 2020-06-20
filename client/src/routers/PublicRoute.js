import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import PublicHeader from '../common/components/Headers/PublicHeader';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <Redirect to="/dashboard" />
      ) : (
        <div>
          <PublicHeader />
          <Component {...props} />
        </div>
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.user._id,
  };
};

export default connect(mapStateToProps)(PublicRoute);
