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
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        >
          <header
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '17px 25px',
            }}
          >
            <div className="create-trip__logo">
              Scwrap
            </div>
            <div>
              <img src={accountIcon} />
            </div>
          </header>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                fontSize: '80px',
                color: 'white',
                marginTop: '270px',
              }}
            >
              Scwrap에서 여행을 SCRAP하세요!
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '120px',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '668px',
              }}
            >
              <input
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  borderBottom: '3px solid #8e88ff',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '30px',
                  padding: '10px',
                  height: '50px',
                  width: '100%',
                }}
                value="런던" type="text" 
              />
            </div>
            <div
              style={{
                display: 'flex',
                width: '668px',
              }}
            >
              <div
                style={{
                  marginTop: '20px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  borderBottom: '3px solid #8e88ff',
                  color: 'white',
                  textAlign: 'center',
                  fontSize: '30px',
                  padding: '10px',
                  height: '50px',
                  width: '100%',
                }}
              >
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
