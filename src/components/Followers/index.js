import React, {Component} from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-svg-spinner';

// import './Followers.css';
import {fetchFollowersRequest} from '../../actions/followers';
import {
  getIds,
  getIsFetched,
  getIsFetching,
  getError
} from '../../reducers/followers';
import {Follower} from '../Follower';

export class Followers extends Component {
  componentDidMount() {
    this.props.fetchFollowersRequest(this.props.login);
  }

  render() {
    const {isFetched, isFetching, followers: {data}} = this.props;

    if (isFetching) {
      const style = {
        textAlign: 'center',
        paddingTop: '200px'
      };
      return (
        <div style={style}>
          <Spinner size="64px" color="lightgreen" gap={5} />
        </div>
      );
    }

    if (!isFetched) {
      return 'Данные не загружены!';
    }

    return (
      <div
        className="followers"
        style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}
      >
        {data.map(follower => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  followers: getIds(state),
  isFetched: getIsFetched(state),
  isFetching: getIsFetching(state),
  error: getError(state)
});

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
