import React from 'react'
import firebase from '../firebase';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    }
  }
  componentDidMount = () => {
    firebase.database().ref('/trips').on('value', snapshot => {
      // 현재 trips date를 가져오는 부분
      console.log(snapshot.val());
      this.setState({
        trips: map(snapshot.val(), (trip, key) => ({ id: key, ...trip })),
      })
    })
  }

  addTripToDatabase = (data /*data의 형태는 Trip Model 형태와 동일*/) => {
    firebase.database().ref('/trips').push({
      title: "샌프란 여행",
      posted_by: {
        name: '윌로비',
        photoUrl: 'https://image.com',
      },
      startDate: '2017-10-31',
      endDate: '2017-11-03',
      thumbnailImageUrl: 'https://image.com',
    })
  }

  render() {
    return (
      <div>
        Main
        <button onClick={this.addTripToDatabase}>
          더미 Trip 추가하기
        </button>
        <div>
          {isEmpty(this.state.trips) ? (
              <div>
                데이터 로딩중
              </div>
            ) : this.state.trips.map((trip) => {
              console.log(trip);
                return (
                  <div key={trip.id}>
                    <Link to={`/trip/${trip.id}`}><h1>{trip.title}</h1></Link>
                    <p>게시자: {trip.posted_by.name}</p>
                  </div>
                )
              })
          }
        </div>
      </div>
    );
  }
}
