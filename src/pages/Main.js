import React from 'react'
import {
  Link,
} from 'react-router-dom';


export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Main
              </Link>
            </li>
            <li>
              <Link to="/trip/create">
                새로운 여행 준비하기
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
            <li>
              <Link to="/trip">
                Trip
              </Link>
            </li>
          </ul>
        </nav>
        <div>Main</div>
      </div>
    );
  }
}
