import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const DropZoneBox = styled.section`
  .dropzone {
    div {
      width: 100% !important;
      height: 250px !important; 
    }
  }
`;

const DropZoneUlBox = styled.ul`
  margin-left: 10px;
  text-decoration: none;
`;

const propTypes = {};

const defaultProps = {};

class DropZoneComponent extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
    if(files.length) {
      this.props.onChange(files[0]);
    }
  }

  componentDidMount() {}

  render() {
    return (
        <DropZoneBox>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>{ this.props.name }</p>
            </Dropzone>
          </div>
          <aside>
            <DropZoneUlBox>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </DropZoneUlBox>
          </aside>
        </DropZoneBox>
    );
  }
}

DropZoneComponent.propTypes = propTypes;
DropZoneComponent.defaultProps = defaultProps;

export default DropZoneComponent;