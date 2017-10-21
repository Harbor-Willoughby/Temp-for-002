import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import {
  Provider,
} from 'react-redux';
import Main from './pages/Main';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import logo from './logo.svg';
import './App.css';
import store from './store';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <h1>Welcome to Build 002</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">
                    Main
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/mypage">
                    MyPage
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/mypage" component={MyPage} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
