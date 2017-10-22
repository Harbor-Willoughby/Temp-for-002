import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../pages/image/main-bg.png);
  background-size: cover;
  overflow: hidden;
`;

const propTypes = {};

const defaultProps = {};

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
        <LoginBoxWrapper>
          { this.props.children }
        </LoginBoxWrapper>
    );
  }
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;