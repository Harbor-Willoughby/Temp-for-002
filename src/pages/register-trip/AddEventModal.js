import React from 'react'
import AddImageUpload from './AddImageUpload';
import AddImageSearch from './AddImageSearch';
import AddMemo from './AddMemo';
import AddLink from './AddLink';
import './AddEventModal.css';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeMode = (mode) => this.setState({
    inputMode: mode,
  })


  handleSubmit = (event) => {
    event.preventDefault();
    
    // // Find the text field via the React ref
    // const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    // console.log('this.state.startDate', this.state.startDate);
    // const title = '님을 위한' + text + '여행';
    // const newTripKey = firebase.database().ref('/trips').push({
    //   title: text,
    //   posted_by: {
    //     name: '빌드002',
    //     photoUrl: 'https://image.com',
    //   },
    //   startDate: this.state.startDate._d.toString(),
    //   endDate: this.state.endDate._d.toString(),
    //   thumbnailImageUrl: 'https://image.com',
    //   createdAt: new Date().toString()
    // }).key;
    // // Clear form
    // ReactDOM.findDOMNode(this.refs.textInput).value = '';
    // // this.props.history.push("/trip/create/register");

    // const days = this.diffDate(this.state.startDate._d, this.state.endDate._d);
    this.props.history.push({
      pathname: '/trip/' + this.props.e_key
      // state: { data: newTripKey, days: days }
    })

  }

  renderContent = () => {
    if (this.state.inputMode === 'upload') {
      return (
        <AddImageUpload registEvent={this.props.registEvent} />
      )
    }
    if (this.state.inputMode === 'link') {
      return (
        <AddLink registEvent={this.props.registEvent} />
      )
    }
    if (this.state.inputMode === 'search') {
      return (
        <AddImageSearch typeEvents={this.props.typeEvents} registEvent={this.props.registEvent} />
      )
    }
    if (this.state.inputMode === 'memo') {
      return (
        <AddMemo typeEvents={this.props.typeEvents} registEvent={this.props.registEvent} />
      )
    }

    return null
  }

  render() {
    console.log('this.props.history : ');
    console.log(this.props.history);

    console.log('this.props.e_key : ');
    console.log(this.props.e_key);
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
              <form className="new-events" onSubmit={this.handleSubmit}>
               <button type="submit">완료</button>
              </form>
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
