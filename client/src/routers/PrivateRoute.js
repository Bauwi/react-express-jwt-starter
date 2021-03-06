//PrivateRoute component is used to manage private only pages
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PrivateHeader from '../common/components/Headers/PrivateHeader';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          <PrivateHeader />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.auth.user._id,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
