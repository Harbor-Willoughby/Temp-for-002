import React from 'react'
import './index.css';
import bgImage from './create-post-bg.jpeg';
import moment from 'moment';
import _ from 'lodash';
import accountIcon from './accountIcon.png';
import calendarIcon from './ic-calendar.png';
import FromToDate from '../../component/FromToDate';
import ReactDOM from 'react-dom';
import firebase from '../../firebase';

export default class CreateTripPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '런던',
      showDate: false,
      startDate: moment(),
      endDate: moment(),
    };
  }

  diffDate = (date1, date2) => {
    let diffDate1 = date1 instanceof Date ? date1 : new Date(date1);
    let diffDate2 = date2 instanceof Date ? date2 : new Date(date2);
 
    var diff = Math.abs(diffDate2.getTime() - diffDate1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24)) + 1;
 
    return diff;
  }



  handleSubmit = (event) => {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log('this.state.startDate', this.state.startDate);
    const title = '님을 위한' + text + '여행';
    const startDate = this.state.startDate._d.toString();
    const endDate = this.state.endDate._d.toString();
    const newTripKey = firebase.database().ref('/trips').push({
      title: text,
      posted_by: {
        name: '빌드002',
        photoUrl: 'https://image.com',
      },
      startDate: startDate,
      endDate: endDate,
      thumbnailImageUrl: 'https://image.com',
      createdAt: new Date().toString()  
    }).key;
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    // this.props.history.push("/trip/create/register");

    const days = this.diffDate(this.state.startDate._d, this.state.endDate._d);
    this.props.history.push({
      pathname: '/trip/create/register',
      state: { data: newTripKey, days: days }
    })

  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, startDate, endDate, showDate } = this.state;

    const startDateString = startDate && startDate.format('YYYY-MM-DD');
    const endDateString = endDate && endDate.format('YYYY-MM-DD');

    return (
      <div
        className="create-trip__wrapper"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="create-trip--dimmer">
          <header className="create-trip--nav">
            <div className="create-trip__logo">
              Scwrap
            </div>
            <div>
              <img src={accountIcon} />
            </div>
          </header>
          <form className="new-trip" onSubmit={this.handleSubmit.bind(this)}>
          <div className="create-trip--title-wrapper">
            <div className="create-trip--title">
              Scwrap에서 여행을 SCRAP하세요!
            </div>
          </div>
          <div className="create-trip--form-wrapper">
            <div className="create-trip--input-wrapper">
              <input
                className="create-trip--text-input"
                value={ name } type="text" onChange={ (e) => this.handleChange('name', e.target.value) }
              ref="textInput" />
            </div>
            <div className="create-trip--input-wrapper">
              <div className="create-trip--date-input">
                {startDateString} ~ {endDateString}
                <img className="create-trip--date-img" alt="" src={ calendarIcon } onClick={ _.partial(this.handleChange, 'showDate', !showDate) } ref="dateInput" />
              </div>
              { showDate && <div className="create-trip--input-calendar">
                <FromToDate
                    startDate={ startDate }
                    endDate={ endDate }
                    handleStartDateChange={ _.partial(this.handleChange, 'startDate', _) }
                    handleEndDateChange={ _.partial(this.handleChange, 'endDate', _) }
                    onBlur={ _.partial(this.handleChange, 'showDate', !showDate) }
                /></div> }
            </div>
            <div>
              <div>
                  <button type="submit" className="create-trip__button">NEXT</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
