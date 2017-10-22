import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoBox = styled.div`
  position: absolute;
  top: 14px;
  left: 27px;
  font-family: 'Gotham';
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  color: #ffffff;
`;

const propTypes = {};

const defaultProps = {};

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <LogoBox>Scwrap</LogoBox>
    );
  }
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;