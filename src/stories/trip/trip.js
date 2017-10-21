import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';

const propTypes = {};
const defaultProps = {};

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
    };
  }

  componentDidMount = () => {
  	var id = this.props.location.pathname.split("/")[2];
  	console.log('id : ' + id);
    firebase.database().ref('/trips/' + id).once('value').then((snapshot) => {
    	this.setState({
    		trip: snapshot.val()
    	});
	});
  }

  render() {
    return (
    	<div>
        	<div>Trip Component</div>
        	<h1>{ objectValue(() => this.state.trip.title, '') }</h1>
        </div>
    );
  }
}

Trip.propTypes = propTypes;
Trip.defaultProps = defaultProps;

export default Trip;