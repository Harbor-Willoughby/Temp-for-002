import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker, DateRangePicker, DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import './FromToDate.scss';
import _ from 'lodash';
import './react_dates_overrides.css';

const START_DATE = 'startDate';
const END_DATE = 'endDate';

const propTypes = {
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired
};

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
    };
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.handleStartDateChange(startDate);
    this.props.handleEndDateChange(endDate);
  }

  onFocusChange = (focusedInput) => {
    this.setState({
      // Force the focusedInput to always be truthy so that dates are always selectable
      focusedInput: !focusedInput ? START_DATE : focusedInput,
    });
  }

  componentDidMount() {}

  render() {
    const { focusedInput } = this.state;
    const { startDate, endDate } = this.props;
    const props = _.omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
    ]);

    return (
        <div className="from-to-date">
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