import React from 'react'
import './AddEventModal.css';
import DropZoneComponent from '../../component/DropZone';

const InputModeButton = (props) => {
  return (
    <div
      className="inputmode-button"
      onClick={props.onClick}
    >
      {props.label}
      {props.isActive && <div className="active-underline" />}
    </div>
  )
}

export default class AddEventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputMode: 'upload', // link, search, memo
    }
  }

  changeMode = (mode) => this.setState({
    inputMode: mode,
  })

  renderContent = () => {
    if (this.state.inputMode === 'upload') {
      return (
        <div>
          <DropZoneComponent name="파일을 업로드 하세요" />
        </div>
      )
    }
    if (this.state.inputMode === 'link') {
      return (
        <div>
          링크를 첨부하세요
        </div>
      )
    }
    if (this.state.inputMode === 'search') {
      return (
        <div>
          사진을 검색하세요
        </div>
      )
    }
    if (this.state.inputMode === 'memo') {
      return (
        <div>
          메모를 입력하세요
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div>
          <div className="modal-header">
            <h1 className="modal-header-text">
              Scrap It
            </h1>
            <span
              className="close-icon"
              onClick={this.props.closeModal}
            >
              x
            </span>
          </div>
          <div className="modal-content">
            <div className="modal-content-left-column">
              <InputModeButton
                isActive={this.state.inputMode === 'upload'}
                onClick={() => this.changeMode('upload')}
                label="이미지 업로드"
              />
              <InputModeButton
                isActive={this.state.inputMode === 'search'}
                onClick={() => this.changeMode('search')}
                label="이미지 검색"
              />
              <InputModeButton
                isActive={this.state.inputMode === 'memo'}
                onClick={() => this.changeMode('memo')}
                label="메모"
              />
              <InputModeButton
                isActive={this.state.inputMode === 'link'}
                onClick={() => this.changeMode('link')}
                label="링크"
              />
            </div>
            <div className="modal-content-right-column">
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
