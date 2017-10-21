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
      let trip = snapshot.val();
      
      let dict = {};
      map(trip.events, (event, key) => {
        let day = event.day;
        if (dict[day] == null) {
          dict[day] = [];
        }
        
        dict[day].push(event);
      });

    	this.setState({
    	  days: dict
    	});
	  });
  }

  renderBucket = (events, key) => {
    return (
      <div key={key} className="group span-3">
        {
          events.map((event, key) => {
            return (<Event key={key} event={event} type="image" />);
          })
        }
      </div>
    );
  }

  renderEvents = (day) => {
    let elements = [];
    let count = 0;
    let bucket = {};

    map(day, (event, key) => {
      let byecketKey = parseInt(count / 3);
      if (count % 3 == 0) {
        bucket[byecketKey] = [];
      }

      bucket[byecketKey].push(event);
      count ++;
    })

    map(bucket, (events, key) => {
      elements.push(this.renderBucket(events, key));
    });

    return elements;
  }

  render() {
    return (
      <div id="page-wrapper">
        <div id="wrapper">
          {
            map(this.state.days, (day, key) => {
              return (
                <Day key={key} dayNumber={key}>
                  {
                    this.renderEvents(day)
                  }
                </Day>
              );
            })
          }
        </div>
      </div>
    );
  }
}

TripDetail.propTypes = propTypes;
TripDetail.defaultProps = defaultProps;

export default TripDetail;
