import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';
import {authorize, logout} from '../../actions/auth';

export class AuthPage extends Component {
  state = {
    text: ''
  };

  inputHandler = ev => {
    let {keyCode, target: {value}} = ev;
    keyCode === 13
      ? this.props.authorize(value) && this.setState({text: ''})
      : this.setState({text: value});
  };

  logoutHandler = () => this.props.logout();

  render() {
    return (
      <div>
        <h2>AuthPage</h2>
        <p className="help">Input your github key and press ENTER to submit</p>
        <input
          type="text"
          value={this.state.text}
          placeholder="input git key"
          onChange={this.inputHandler}
          onKeyDown={this.inputHandler}
        />
        {!!this.props.getIsAuthorized && (
          <button onClick={this.logoutHandler}>Logout</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getIsAuthorized: getIsAuthorized(state)
});

const mapDispatchToProps = {authorize, logout};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
