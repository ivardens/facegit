import React, {PureComponent} from 'react';
// import './Follower.css';

export class Follower extends PureComponent {
  render() {
    const {follower} = this.props;
    return (
      <div
        className="follower"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 200,
          height: 200,
          border: '1px dotted gray',
          margin: 5,
          padding: 5
        }}
      >
        <a
          href={`/user/${follower.login}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            className="follower__avatar"
            src={follower.avatar_url}
            alt={follower.login}
            style={{width: '90%', alignSelf: 'center'}}
          />
          {follower.login}
        </a>
      </div>
    );
  }
}

export default Follower;
