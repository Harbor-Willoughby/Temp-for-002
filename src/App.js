import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {
  connect,
} from 'react-redux';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Trip from './pages/trip/trip';
import CreateTrip from './pages/CreateTrip/index';
import RegisterTrip from './pages/register-trip/register-trip';
import TripDetail from './pages/trip/trip-detail';
import Upload from './pages/Upload';
import Search from './pages/Search';
import logo from './logo.svg';
import './App.css';
import store from './store';
import firebase from './firebase';
import { loginUser, logoutUser } from './actions';
import Voucher from './pages/Voucher/Voucher';
import Loginbox from './pages/Login/LoginBox';
import Menu from './pages/Menu';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.loginUser(user);
      }
    })
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/mypage" component={MyPage} />
          <Route exact path="/trip" component={Trip} />
          <Route exact path="/trip/create" component={CreateTrip} />
          <Route exact path="/trip/create/register" component={RegisterTrip} />
          <Route path="/trip/:tripId" component={TripDetail} />
          <Route path="/upload" component={Upload} />
          <Route path="/search" component={Search} />
          <Route path="/voucher" component={Voucher} />
          <Route path="/main" component={CreateTrip} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
}))(App);
