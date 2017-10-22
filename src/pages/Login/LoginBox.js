import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../../component/Layout';
import Logo from '../../component/Logo';
import People from '../../component/People';
import LoginPopup from './LoginPopup';

const ContentBox = styled.div`
  position: absolute;
  top: 100px;
  left: 300px;
`;

const propTypes = {};

const defaultProps = {};

class LoginBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <Layout>
          <Logo />
          <People />
          <ContentBox>
            <LoginPopup />
          </ContentBox>
        </Layout>
    );
  }
}

LoginBox.propTypes = propTypes;
LoginBox.defaultProps = defaultProps;

export default LoginBox;