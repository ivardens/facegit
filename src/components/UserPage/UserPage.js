import React, {Component} from 'react';
import './UserPage.css';
import Followers from '../Followers/';
import {connect} from 'react-redux';
import {fetchUserRequest} from '../../actions/users';
import {
  getIsFetching,
  getIsFetched,
  getData,
  getIsAuthorized
} from '../../reducers/users';
import Spinner from 'react-svg-spinner';
export class UserPage extends Component {
  componentDidMount = () => {
    const {params, fetchUserRequest} = this.props;
    // action на получение информации о пользователе
    this.props.fetchUserRequest(params.name);
  };

  // componentDidMount() {
  //   // action на получение информации о пользователе
  //   const {match: {params: {name}}} = this.props;
  //   this.props.fetchUserRequest(name);
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('componentWillReceiveProps', nextProps);
  //   // Если в будущем, мы переходим на другую страницу,
  //   // компонент UserPage не будет заново мантироваться,
  //   // поэтому, с помощью componentWillReceiveProps
  //   // нужно следить, когда поменяется пропс { match: { params: { name }}}.
  //   const {match: {params: {name}}} = this.props;
  //   const {match: {params: {name: nextName}}} = nextProps;
  //   console.log(name, nextName, name === nextName);
  //   if (name !== nextName) {
  //     this.props.fetchUserRequest(nextName);
  //   }
  // }

  render() {
    const {user, isFetched, isFetching} = this.props;

    console.log(this.props);
    console.log(this.props.user);
    console.log(this.props.fetchUserRequest);

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
    return (
      <div className="">
        <div className="">
          <img className="" src={user.avatar_url} alt={user.login} />
        </div>

        <div className="">
          <h3>{user.login}</h3>
          <p>Followers: {user.followers}</p>
          <p>Public repos: {user.public_repos}</p>
        </div>
        <Followers login={user.login} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: getData(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state)
});

const mapDispatchToProps = {
  fetchUserRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
