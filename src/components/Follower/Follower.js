import React, {PureComponent} from 'react';
import './Follower.css';

export class Follower extends PureComponent {
  render() {
    const {follower} = this.props;
    return (
      <div className="follower">
        <img
          className="follower__avatar"
          src={follower.avatar_url}
          alt={follower.login}
        />
        <div className="follower__info">
          <a href={`/user/${follower.login}`}>{follower.login}</a>
        </div>
      </div>
    );
  }
}

export default Follower;
