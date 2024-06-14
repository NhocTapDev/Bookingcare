import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isShowPassword: false,
    }
  }

  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleLogin = async () => {
    this.setState({
      errMessage: ''
    });
    try {
      let data = await handleLoginApi(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message
          });
        }
      }
    }
  }

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    })
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      this.handleLogin();
    }
  };

  render() {
    return (
      <div className='login-background'>
        <div className='login-container'>
          <div className='login-content row'>
            <div className='col-12 text-center login-text'>
              <FormattedMessage id={"login.login"} />
            </div>
            <div className='col-12 form-group login-form'>
              <label>
                <FormattedMessage id={"login.username"} />
              </label>
              <input
                type='text'
                className='form-control login-input'
                placeholder='Enter your username'
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUsername(event)}
                onKeyDown={(event) => this.handleKeyDown(event)}
              ></input>
            </div>
            <div className='col-12 form-group login-form'>
              <label>
                <FormattedMessage id={"login.password"} />
              </label>
              <input
                type={this.state.isShowPassword ? 'text' : 'password'}
                className='form-control login-input'
                placeholder='Enter your password'
                onChange={(event) => this.handleOnChangePassword(event)}
                onKeyDown={(event) => this.handleKeyDown(event)}
              ></input>
              <i className={this.state.isShowPassword ? 'far fa-eye password-icon' : 'far fa-eye-slash password-icon'} onClick={(event) => this.handleShowHidePassword(event)}></i>
            </div>
            <div className='col-12'>
              <span className='forgot-password'>
                <FormattedMessage id={"login.forgot-password"} />
              </span>
            </div>
            <div className='col-12' style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className='col-12'>
              <button className='btn-login'
                onClick={() => { this.handleLogin() }}
                onKeyDown={(event) => this.handleKeyDown(event)}>
                <FormattedMessage id={"login.login"} />
              </button>
            </div>
            <div className='col-12 social-login'>
              <i className='fab fa-google-plus-g google-icon'></i>
              <i className='fab fa-facebook-f facebook-icon'></i>
            </div>
            <div className='col-12 section-signup'>
              <span>
                <FormattedMessage id={"login.have-signup"} />
              </span>
              <span className='sign-up'>
                <FormattedMessage id={"login.signup"} />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    language: state.app.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
