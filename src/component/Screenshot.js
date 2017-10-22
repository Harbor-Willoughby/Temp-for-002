import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SCREENSHOT_REQUEST} from '../reducers/screenshot';

const propTypes = {
  requestScreenshot: PropTypes.func.isRequired,
};

const defaultProps = {
  url: 'http://www.naver.com',
};

class Screenshot extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.requestScreenshot(this.props.url);
  }

  render() {
    return (
        <div>
          <img width={ 200 } alt="" src={ this.props.imageUrl } />
        </div>
    );
  }
}

Screenshot.propTypes = propTypes;
Screenshot.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  imageUrl: state.screenshot.url
});
const mapDispatchToProps = (dispatch) => ({
  requestScreenshot: (url) => dispatch({
    type: SCREENSHOT_REQUEST,
    payload: {
      url,
    },
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Screenshot);