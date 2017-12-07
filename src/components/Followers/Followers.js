import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';

import './Followers.css';

import {fetchFollowersRequest} from '../../actions/followers';
import {
  getFollowersIds,
  getFollowersIsFetched,
  getFollowersIsFetching,
  getFollowersError
} from '../../reducers/followers';
import Follower from '../Follower/';

export class Followers extends Component {
  componentDidMount() {
    this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const {followers, isFetched, isFetching} = this.props;

    if (isFetching) {
      return (
        <div style={{textAlign: 'center'}}>
          <Spinner size="64px" color="lightgreen" gap={5} />
        </div>
      );
    }

    if (!isFetched) {
      return 'Data is not loaded!';
    }

    return (
      <div>
        {followers.map(follower => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: getFollowersIds(state),
  isFetched: getFollowersIsFetched(state),
  isFetching: getFollowersIsFetching(state),
  error: getFollowersError(state)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
