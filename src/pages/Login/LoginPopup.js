import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoginBg from './image/bg-login.png';
import BtnClose from './image/btn_close.png';
import InputBox from '../../component/InputBox';

const CloseBox = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  img {
    width: 20px;
  }
`;
// ba78ff
const LoginBox = styled.div`
  width: 900px;
  height: 550px;
	background-color: #ffffff;
`;

const LeftBox = styled.div`
  display: inline-block;
  width: 350px;
  text-align: center;
  vertical-align: top;
`;

const ScwrapBox = styled.div`
  margin-top: 40px;
  font-family: SpoqaHanSans;
	font-size: 25px;
	line-height: 2.0;
	letter-spacing: -0.5px;
	text-align: center;
	color: #010101;
`;

const FacebookBox = styled.div`
  width: 250px;
  font-family: Gotham;
	font-size: 18px;
	line-height: 1.88;
	letter-spacing: -0.8px;
	text-align: center;
	color: #ffffff;
  border-radius: 3px;
	background-color: #4267b2;
	padding: 5px 10px;
	margin: 40px auto 20px auto;
	cursor: pointer;
	&:hover {
	  opacity: 0.8;
	}
`;

const GoogleBox = styled.div`
  width: 250px;
  font-family: Gotham;
	font-size: 18px;
	line-height: 1.88;
	letter-spacing: -0.8px;
	text-align: center;
	color: #ffffff;
  border-radius: 3px;
	background-color: #eb4335;
	padding: 5px 10px;
	margin: 10px auto;
	cursor: pointer;
	&:hover {
	  opacity: 0.8;
	}
`;

const LoginInputBox = styled.div`
  padding-top: 40px;
  height: 180px;
  text-align: center;
`;

const LoginButtonBox = styled.div`
  width: 250px;
  font-family: Gotham;
	font-size: 18px;
	line-height: 1.88;
	letter-spacing: -0.8px;
	text-align: center;
	color: #ffffff;
  border-radius: 3px;
	padding: 5px 10px;
	margin: 0px auto;
	background-color: #ba78ff;
	cursor: pointer;
	&:hover {
	  opacity: 0.8;
	}
`;

const RightBox = styled.div`
  position: relative;
  display: inline-block;
  width: 550px;
  height: 550px;
  background-image: linear-gradient(318deg, #094fc2, #7136af, #8878ff);
	box-shadow: 0 0 20px 0 rgba(0, 0, 1, 0.2);
`;

const RightTitle1 = styled.div`
  position: absolute;
  top: ${({ isSignup }) => (isSignup ? '60px' : '130px')};
  right: 50px;
  font-size: 50px;
  font-weight: 300;
  line-height: 1.25;
  letter-spacing: -2px;
  text-align: right;
  color: #ffffff;
`;

const RightTitle2 = styled.div`
  position: absolute;
  top: 280px;
  right: 50px;
  font-size: 23px;
	line-height: 2.78;
	letter-spacing: -0.9px;
	text-align: left;
	color: #ffffff;
`;

const SignUpBox = styled.div`
  width: 170px;
  position: absolute;
  bottom: ${({ isSignup }) => (isSignup ? '100px' : '150px')};
  right: 55px;
  font-family: Gotham;
	font-size: 18px;
	line-height: 1.88;
	letter-spacing: -0.8px;
	text-align: center;
	color: #ffffff;
	padding: 5px 10px;
	margin: 0px auto;
	border-radius: 3px;
	background-color: #ba78ff;
	cursor: pointer;	
	&:hover {
	  opacity: 0.8;
	}
`;

const InputWrapper = styled.div`
  position: absolute;
  top: 200px;
  right: 60px;
  width: 250px;
  
  input {
    color: #fff;
  }
  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const RightImgBox = styled.img`
  width: 100%;
`;

const propTypes = {

};

const defaultProps = {
  onClose: () => ({}),
};

class LoginPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignup: false,
      isSuccess: false,
    };
  }

  toggleSignup = () => {
    this.setState({
      isSignup: !this.state.isSignup,
    });
  };

  toggleSuccess = () => {
    this.setState({
      isSuccess: !this.state.isSuccess
    });
  };

  componentDidMount() {}

  render() {
    return (
        <LoginBox>
          <LeftBox>
            <ScwrapBox>
              Scwrap 을 간편하게 이용하세요 !
            </ScwrapBox>
            <FacebookBox>
              Facebook 계정으로 로그인
            </FacebookBox>
            <GoogleBox>
              Google 계정으로 로그인
            </GoogleBox>
            <LoginInputBox>
              <InputBox type="text" placeholder="Email"/>
              <InputBox type="text" placeholder="Password"/>
            </LoginInputBox>
            <LoginButtonBox>
              Login
            </LoginButtonBox>
          </LeftBox>
          <RightBox>
            <CloseBox onClick={ this.props.onClose }>
              <img alt="" src={BtnClose}/>
            </CloseBox>
            { this.getRightRender() }
          </RightBox>
        </LoginBox>
    );
  }

  getRightRender = () => {
    if(this.state.isSuccess) {
      return (
          <div>
            <RightTitle1>
              환영합니다!<br />
              반가워요!
            </RightTitle1>
            <RightTitle2>
              Scwrap 의 회원이 되었어요!
            </RightTitle2>
          </div>
      );
    }
    return this.state.isSignup ? this.renderSignup() : this.renderView();
  }

  renderView = () => {
    return (
        <div>
          <RightTitle1>
            안녕하세요!<br/>
            처음 뵙겠습니다.
          </RightTitle1>
          <RightTitle2>
            Scwrap 의 회원이 되어주세요!
          </RightTitle2>
          <SignUpBox onClick={() => this.toggleSignup()}>
            Sign up
          </SignUpBox>
        </div>
    );
  };

  renderSignup = () => {
    return (<div>
      <RightTitle1 isSignup>
        안녕하세요!<br/>
        처음 뵙겠습니다.
      </RightTitle1>
      <InputWrapper>
        <InputBox type="text" placeholder="홍길동"/>
        <InputBox type="text" placeholder="Email"/>
        <InputBox type="text" placeholder="Password"/>
      </InputWrapper>
      <SignUpBox isSignup onClick={ () => this.toggleSuccess() }>
        Sign up
      </SignUpBox>
    </div>);
  };
}

LoginPopup.propTypes = propTypes;
LoginPopup.defaultProps = defaultProps;

export default LoginPopup;