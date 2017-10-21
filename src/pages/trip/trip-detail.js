import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';
import Event from '../../components/EventComponent/index';
import Day from '../../components/DayComponent/index';
import './sass/main.css';

const propTypes = {};
const defaultProps = {};

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
    };
  }

  componentDidMount = () => {
  	var id = this.props.match.params.tripId;
  	console.log('id : ' + id);
    firebase.database().ref('/trips/' + id).once('value').then((snapshot) => {
    	this.setState({
    		trip: snapshot.val()
    	});
	});
  }

  render() {
    return (
      <div id="page-wrapper">
        <div id="wrapper">
          <Day dayNumber={1}>
            <Event
              type="link"
            />
            <Event
              type="image"
            />
          </Day>
          <Day dayNumber={2}>
            <Event
              type="link"
            />
            <Event
              type="image"
            />
          </Day>
          <Day dayNumber={3}>
            <Event
              type="link"
            />
            <Event
              type="image"
            />
          </Day>
        </div>
      </div>
    );
  }
}

TripDetail.propTypes = propTypes;
TripDetail.defaultProps = defaultProps;

export default TripDetail;
