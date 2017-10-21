import React from 'react'
import './index.css';
import bgImage from './create-post-bg.jpeg';
import accountIcon from './accountIcon.png';


export default class CreateTripPage extends React.Component {
  render() {
    return (
      <div
        className="create-trip__wrapper"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="create-trip--dimmer">
          <header className="create-trip--nav">
            <div className="create-trip__logo">
              Scwrap
            </div>
            <div>
              <img src={accountIcon} />
            </div>
          </header>
          <div className="create-trip--title-wrapper">
            <div className="create-trip--title">
              Scwrap에서 여행을 SCRAP하세요!
            </div>
          </div>
          <div className="create-trip--form-wrapper">
            <div className="create-trip--input-wrapper">
              <input
                className="create-trip--text-input"
                value="런던" type="text" 
              />
            </div>
            <div className="create-trip--input-wrapper">
              <div className="create-trip--date-input">
                10월 21일 ~ 10월 31일
              </div>
            </div>
            <div>
              <div className="create-trip__button">
                NEXT
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
