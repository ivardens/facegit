import React, {Component} from 'react';
import './UserPage.css';
import Followers from '../Followers/';
import {connect} from 'react-redux';
import {fetchUserRequest} from '../../actions/users';
export class UserPage extends Component {
  componentDidMount = () => {
    const {params, fetchUserRequest} = this.props;
    this.props.fetchUserRequest(params.name);
  };

  render() {
    console.log(this.props.user);
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

const mapStateToProps = (state, props) => ({
  user: state.users.data
});

const mapDispatchToProps = {
  fetchUserRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
