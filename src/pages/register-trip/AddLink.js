import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {
  connect,
} from 'react-redux';
import Screenshot from '../../component/Screenshot';

const AddLinkBox = styled.div`
  text-align: center;
`;

const Title = styled.span`
  margin-right: 10px;
  font-family: SpoqaHanSans;
	font-size: 20px;
	line-height: 2.26;
	letter-spacing: -1px;
	text-align: left;
	color: #ba78ff;
`;

const InputBox = styled.input`
  background-color: #ffffff;
	border: solid 1px #ba78ff;
	color: #666666;
border-radius: 15px;
    width: 350px;
    height: 30px;
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      photo: null,
      isPhoto: false,
    };
  }

  // 이미지 URL 을 통한 파일 업로더
  urlUploader = () => {
    const urlDOM = ReactDOM.findDOMNode(this.refs.url);
    const path = 'temp';

    let imageURL = urlDOM.value.trim();
    this.setState({
      url: imageURL
    });
    // let imageName = 'image' + Math.random() * 100 + imageURL.match(/\w+\.[A-Za-z]{3,4}(?=\?|$)/g);
    //let imageName = imageURL.split(",")[1]; // 구글 이미지 주소에서 이름 가져오는 부분 문제 =
    // this.setState({ isPhoto: false });
    // fetch(imageURL).then(res => res.blob()) // Gets the response and returns it as a blob
    //     .then(blob => {
    //       let objectURL = URL.createObjectURL(blob);
    //       let image = new Image();
    //       image.src = objectURL;
    //
    //       let storageRef = firebase.storage().ref(path).child(imageName);
    //       let task = storageRef.put(blob);
    //
    //       task.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
    //         let progress = (snapshot.bytesTransferred / snapshot.totalBytes) *
    //             100;
    //
    //         if (progress == 100) {
    //           this.uploadComplete(snapshot.downloadURL);
    //         }
    //       }, function error(err) {
    //
    //       }, function complete() {
    //
    //       });
    //     });
  };

  uploadComplete = (image) => {
    this.setState({ photo: image, isPhoto: true });
    this.props.registEvent('link', {
      image: image,
    });
  };

  render() {
    return (
        <AddLinkBox>
          <div>
            <Title>URL</Title>
            <InputBox type="text" ref="url"  placeholder="이미지 URL"/>
            <button onClick={this.urlUploader}>업로드</button>
          </div>
          <div>
          {
            this.state.url
                ? <Screenshot url={ this.state.url }  />
                : 'URL이 정확하면 이미지를 미리 볼 수 있습니다'
          }
          </div>
        </AddLinkBox>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
});

export default connect(mapStateToProps)(Main);