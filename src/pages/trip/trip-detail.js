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

  renderBucket = (events, key, type) => {
    const type1 = "span-1-5";
    const type2 = "span-3";
    const type3 = "span-4-5";

    let className = "group " + type;
    
    if (type == type1) {
      return (<Event key={key} event={events[0]} classType="span-2-5" type="image" />);
    }

    let elements = [];
    let count = 0;
    let length = events.length;

    events.map((event, key) => {
      let className = "span-1-5";
      if (count == 0 || count == 3 || length == 2) {
        className = "span-3";
      }

      elements.push (<Event key={key} event={event} classType={className} type="image" />);

      count ++;
    })

    return (
      <div key={key} className={className}>
        {
          elements
        }
      </div>
    );
  }

  renderEvents = (day) => {
    const type1 = "span-1-5";
    const type2 = "span-3";
    const type3 = "span-4-5";

    let elements = [];
    let count = 0;
    let length = day.length;
    let bucket = {};
    let bucketType = {};
    let type = null;
    let size = 1;

    map(day, (event, key) => {
      let bucketKey = parseInt(count / size);
      if (count % size == 0) {
        bucket[bucketKey] = [];
        
        if (length == 1) {
          type = type1;
          size = 1;
        } else if (length == 2) {
          type = type2;
          size = 2;
        } else if (length == 3) {
          type = type2;
          size = 3;
        } else if (length == 4) {
          type = type3;
          size = 4;
        } else if (type == type2) {
          type = type3;
          size = 4;
        } else {
          type = type2;
          size = 3;
        }

        bucketType[bucketKey] = type;
      }

      bucket[bucketKey].push(event);
      count ++;
      length --;
    })

    map(bucket, (events, key) => {
      console.log("k " + key + " " + bucketType[key]);
      elements.push(this.renderBucket(events, key, bucketType[key]));
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
