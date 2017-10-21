import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const propTypes = {};

const defaultProps = {};

class FromToDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      focused: false,
    };
  }

  componentDidMount() {}

  render() {
    return (
        <SingleDatePicker
            id="date_input"
            date={this.state.date}
            focused={this.state.focused}
            onDateChange={(date) => { this.setState({ date }); }}
            onFocusChange={({ focused }) => { this.setState({ focused }); }}
        />
    );
  }
}

FromToDate.propTypes = propTypes;
FromToDate.defaultProps = defaultProps;

export default FromToDate;