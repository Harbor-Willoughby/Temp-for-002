import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import bgImage from './bg02.jpg';
import logoImage from './logo.png';
import popbuttonImage from './pop-button.png';

export default class RegisterTrip extends React.Component {
  handleSubmit(event) {
    var pair_key = this.props.location.state.data;

    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/events').push({
      pair_key: pair_key,
      title: text,
      posted_by: {
        name: '빌드002',
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
    document.body.style.backgroundImage = `url(${bgImage})`; 
    return (
      <div id="page-wrapper">
      <img src={logoImage} className="logo" />
      <div>
        <h2>당신의 여행 첫째날을 SCRAP 하세요!</h2>
        <h3>사진, 링크, 메모 등 자유롭게 이용하실 수 있습니다.</h3>
      </div>
      <div>
        <img src={popbuttonImage} className="pop-button" />
      </div>
      {/*
      <form className="new-event" onSubmit={this.handleSubmit.bind(this)} >

        <input

        type="text"

        ref="textInput"

        placeholder="Type to add new events"

        />

      </form>
      */}
      </div>
    );
  }
}
