import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getToken} from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  render() {
    const {token, component: Component, ...rest} = this.props;
    console.log('token', token);
    console.log('component', this.props.component);
    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

// export default connect(state => ({
//   token: getToken(state)
// }))(PrivateRoute);

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(mapStateToProps)(PrivateRoute);
