import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import bgImage from './bg02.jpg';
import logoImage from './logo.png';
import popbuttonImage from './pop-button.png';
import AddEventModal from './AddEventModal';
import {objectValue} from '../../util/objectUtill';
import {withRouter} from 'react-router-dom';


class RegisterTrip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalDisplayed: true,
      typeEvents: null,
      day: 1,
    }
  }

  componentDidMount = () => {
    const pair_key = objectValue(() => this.props.location.state.data, '');

    firebase.database().ref('/trips').child(pair_key).once('value').then((snapshot) => {
      let trip = snapshot.val();
      let dict = {};
      map(trip.events, (event, key) => {
        if (dict[event.type] == null) {
          dict[event.type] = [];
        }

        dict[event.type].push(event);
      });

      this.setState({ typeEvents: dict });
    });
  }

  toggleModalOpen = () => this.setState({ isModalDisplayed: !this.state.isModalDisplayed })

  registEvent = (type, event) => {
    const pair_key = this.props.location.state.data;
    const days = this.props.location.state.days;
    const day = this.state.day;

    firebase.database().ref('/trips').child(pair_key).child('/events').push({
      pair_key: pair_key,
      type: type,
      day: day,
      createdAt: new Date().toString(),
      ...event
    })
  }

  render() {
    document.body.style.backgroundImage = `url(${bgImage})`;
    return (
      <div
        id="page-wrapper"
        style={{ position: 'relative' }}
      >
        {this.state.isModalDisplayed && <AddEventModal typeEvents={this.state.typeEvents} registEvent={this.registEvent} closeModal={this.toggleModalOpen} history={this.props.history} e_key={this.props.location.state.data} />}
        <div>
          <img src={logoImage} className="logo" />
          <div>
            <h2>당신의 여행 첫째날을 SCRAP 하세요! {this.props.location.state.data}</h2>
            <h3>사진, 링크, 메모 등 자유롭게 이용하실 수 있습니다.</h3>
          </div>
          <div
            onClick={this.toggleModalOpen}
          >
            <img
              src={popbuttonImage}
              className="pop-button"
            />
          </div>
        </div>
    </div>
    );
  }
}

export default RegisterTrip;