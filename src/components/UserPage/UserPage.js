import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserPage.css';
import Followers from '../Followers/';
import { getUsers, getIsFetching } from '../../reducers/users';
import { fetchUserRequest } from '../../actions/users';

export class UserPage extends Component {
  componentDidMount() {
    const { fetchUserRequest, match } = this.props;
    fetchUserRequest(match.params.name);
  }

  render() {
    return (
      <div className="">
        <div className="">
          <img
            className=""
            src="https://avatars2.githubusercontent.com/u/862978?v=4"
            alt="dex157"
          />
        </div>

        <div className="">
          <h3>dex157</h3>
          <p>Followers: 22</p>
          <p>Public repos: 26</p>
        </div>
        <Followers />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: getUsers(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = { fetchUserRequest };
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
