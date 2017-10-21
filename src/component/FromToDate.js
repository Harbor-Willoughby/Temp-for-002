import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, DateRangePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import _ from 'lodash';
import './react_dates_overrides.css';

const START_DATE = 'startDate';
const END_DATE = 'endDate';

const propTypes = {};

const defaultProps = {
  initialStartDate: moment(),
  initialEndDate: moment(),
  numberOfMonths: 2,
};

class FromToDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  }

  onFocusChange = (focusedInput) => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  }

  componentDidMount() {}

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const startDateString = startDate && startDate.format('YYYY-MM-DD');
    const endDateString = endDate && endDate.format('YYYY-MM-DD');

    const props = _.omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
    ]);

    console.log(props);
    return (
        <div className="from-to-date">
          <div style={{ marginBottom: 16 }}>
            <input type="text" name="start date" value={startDateString} readOnly />
            <input type="text" name="end date" value={endDateString} readOnly />
          </div>
          <DayPickerRangeController
              id="dayPicker"
              numberOfMonths={ this.props.numberOfMonths }
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              focusedInput={focusedInput}
              startDate={startDate}
              endDate={endDate}
          />
        </div>
    );
  }
}

FromToDate.propTypes = propTypes;
FromToDate.defaultProps = defaultProps;

export default FromToDate;