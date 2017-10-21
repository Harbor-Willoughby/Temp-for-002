import React, {Component} from 'react';

class RegisterTrip extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {}

  render() {
    return (
      <div id="page-wrapper">
        Register Your Trip!
      </div>
    );
  }
}

RegisterTrip.propTypes = propTypes;
RegisterTrip.defaultProps = defaultProps;

export default RegisterTrip;