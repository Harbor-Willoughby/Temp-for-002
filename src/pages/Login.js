import React from 'react'
import firebase from '../firebase';
import { loginGoogleUser, logoutUser } from '../actions';
import {
  connect,
} from 'react-redux';
import { FacebookLogin } from 'react-facebook-login-component';
import {isEmpty} from "lodash";

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            facebookName: '',
            facebookEmail: '',
        }
        this.responseFacebook = this.responseFacebook.bind(this)
    }

    responseFacebook (response) {
        // console.log(response.id);
        // console.log(response.email);
        // console.log(response.name);
        // console.log(response.accessToken);
        if(response) {
            this.setState({facebookEmail: response.email, facebookName: response.name})
        }
    }

  render() {
    return (
      <div>
        Login
          {
              isEmpty(this.state.facebookEmail) ? (
                  <h1>
                      {this.props.name}
                      {this.props.email}
                  </h1>
                  ) :
                  <h1>
                      {this.state.facebookEmail}
                      {this.state.facebookName}
                  </h1>

          }
          <div>
              <img src={this.props.profileImageUrl}/>
          </div>
          <button onClick={this.props.loginGoogleUser}>
              구글로 로그인하기
          </button>
          <FacebookLogin socialId="1046779778772541"
                         language="en_US"
                         scope="public_profile,email"
                         responseHandler={this.responseFacebook}
                         xfbml={true}
                         fields="id,email,name"
                         version="v2.5"
                         className="facebook-login"
                         buttonText="Facebook으로 로그인"/>
        <button
          onClick={this.props.logoutUser}
        >
          로그아웃
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.name,
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
});

const mapDispatchToProps = (dispatch) => ({
  loginGoogleUser: () => dispatch(loginGoogleUser()),
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
