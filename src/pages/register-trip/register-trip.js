import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';


export default class RegisterTrip extends React.Component {
  registEvent = (day) => {
    var pair_key = this.props.location.state.data;

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/trips').child(pair_key).child('/events').push({
      pair_key: pair_key,
      title: text,
      posted_by: {
        name: '빌드002',
        photoUrl: 'https://image.com',
      },
      day: day,
      thumbnailImageUrl: 'https://image.com',
      createdAt: new Date().toString()
    })
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  registerForm = (day) => {
    return (
    <div>
        <input

        type="text"

        ref="textInput"

        placeholder={"events " + day + " Day"}

        />
        <button onClick={(e)=>this.registEvent(day)} >Regist</button>
    </div>
  )}

  render() {
    let inputs = [];
    for (let i = 0; i < this.props.location.state.days; i ++) {
      inputs.push(this.registerForm(i + 1));
    }

    return (
      <div id="page-wrapper">
        Register Your Trip!
    
        <br />
        {inputs}
      </div>
    );
  }
}
