import React from 'react'
import firebase from '../firebase';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import sortBy from 'lodash/sortBy'
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
    }
  }
  componentDidMount = () => {
    var _= require('underscore');
    firebase.database().ref('/trips').orderByChild('createdAt').on('value', snapshot => {
      // 현재 trips date를 가져오는 부분
      console.log(snapshot.val());
      var arr =  _.sortBy(snapshot.val(), function(num) {
          return num;
      })
      this.setState({
        trips: map(_.sortBy(snapshot.val(), function(num) {
          return num;
      }).reverse(), (trip, key) => ({ id: key, ...trip })),
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/trips').push({
      title: text,
      posted_by: {
        name: '윌로비',
        photoUrl: 'https://image.com',
      },
      startDate: '2017-10-31',
      endDate: '2017-11-03',
      thumbnailImageUrl: 'https://image.com',
      createdAt: new Date().toString()
    })
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
    return (
      <div>
        Main

          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >

            <input

              type="text"

              ref="textInput"

              placeholder="Type to add new tasks"

            />

          </form>
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
