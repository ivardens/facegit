import React, {Component} from 'react';
import {connect} from 'react-redux';
import './UserPage.css';
import Followers from '../Followers/';
import {getUsers, getIsFetching} from '../../reducers/users';
import {fetchUserRequest} from '../../actions/users';

export class UserPage extends Component {
  componentDidMount() {
    const {fetchUserRequest, match: {params: {name}}} = this.props;
    this.props.fetchUserRequest(name);
  }

  render() {
    if (this.props.isUsers) {
      const {
        avatar_url,
        login,
        followers,
        public_repos,
        html_url,
        created_at
      } = this.props.isUsers;
      return (
        <div
          className=""
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div className="">
            <img
              className=""
              src={avatar_url}
              alt={login}
              style={{width: 300}}
            />
          </div>

          <div className="">
            <h3>
              <a href={html_url}>{login}</a>
            </h3>
            <p>Followers: {followers}</p>
            <p>Public repos: {public_repos}</p>
            <p>Created at: {created_at}</p>
          </div>
          <Followers login={login} />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  isUsers: getUsers(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {fetchUserRequest};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
