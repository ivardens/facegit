import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

class PrivateRoute extends Component {
  render() {
    const {isAuthorized, component: Component, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default connect(state => ({
  isAuthorized: getIsAuthorized(state)
}))(PrivateRoute);
