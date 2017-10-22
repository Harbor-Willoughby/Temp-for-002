import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBoxWrapper = styled.input`
  width: 250px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #ba78ff;
  color: rgb(142, 136, 255);
  text-align: center;
  font-size: 20px;
  padding: 2px;
  height: 50px;
  margin: 0px auto;
  &::placeholder {
    color: rgba(142, 136, 255, 0.5);
  }
`;

const propTypes = {};

const defaultProps = {};

class InputBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <InputBoxWrapper { ...this.props }>{ this.props.children }</InputBoxWrapper>
    );
  }
}

InputBox.propTypes = propTypes;
InputBox.defaultProps = defaultProps;

export default InputBox;