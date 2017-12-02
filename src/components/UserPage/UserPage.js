import React, {Component} from 'react';
import './UserPage.css';
import Followers from '../Followers/';

export class UserPage extends Component {
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

export default UserPage;
