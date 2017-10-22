import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScwrapPeople from '../pages/image/accountIcon.png';

const PeopleBox = styled.div`
  position: absolute;
  top: 17px;
  right: 27px;
  img {
    width: 30px;
  }
`;

const propTypes = {};

const defaultProps = {};

class People extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <PeopleBox><img alt="" src={ScwrapPeople}/></PeopleBox>
    );
  }
}

People.propTypes = propTypes;
People.defaultProps = defaultProps;

export default People;