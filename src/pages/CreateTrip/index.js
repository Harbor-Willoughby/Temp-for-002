import React from 'react'
import './index.css';
import bgImage from './create-post-bg.jpeg';
import moment from 'moment';
import _ from 'lodash';
import accountIcon from './accountIcon.png';
import calendarIcon from './ic-calendar.png';
import FromToDate from '../../component/FromToDate';

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
              />
            </div>
            <div className="create-trip--input-wrapper">
              <div className="create-trip--date-input">
                {startDateString} ~ {endDateString}
                <img className="create-trip--date-img" alt="" src={ calendarIcon } onClick={ _.partial(this.handleChange, 'showDate', !showDate) } />
              </div>
              { showDate && <div className="create-trip--input-calendar">
                <FromToDate
                    startDate={ startDate }
                    endDate={ endDate }
                    handleStartDateChange={ _.partial(this.handleChange, 'startDate', _) }
                    handleEndDateChange={ _.partial(this.handleChange, 'endDate', _) }
                /></div> }
            </div>
            <div>
              <div className="create-trip__button">
                NEXT
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
