import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import {
  connect,
} from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photo: null,
            isPhoto: false
        };
    }

    // 이미지 URL 을 통한 파일 업로더
    urlUploader = () => {
        const urlDOM = ReactDOM.findDOMNode(this.refs.url);
        const path = 'temp';
        
        let imageURL = urlDOM.value.trim();
        let imageName = imageURL.match(/\w+\.[A-Za-z]{3,4}(?=\?|$)/g)[0];
        //let imageName = imageURL.split(",")[1]; // 구글 이미지 주소에서 이름 가져오는 부분 문제 =

        this.setState({isPhoto: false});
        fetch(imageURL)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                let objectURL = URL.createObjectURL(blob);
                let image = new Image();
                image.src = objectURL;
        

                let storageRef = firebase.storage().ref(path).child(imageName);
                let task = storageRef.put(blob);

                task.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
                    let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;   
                    
                    if (progress == 100) {
                        this.uploadComplete(snapshot.downloadURL);
                    }
                }, function error(err) {
                
                },function complete() {
                
                });
            });
    }

    uploadComplete = (image) => {
        this.setState({ photo: image, isPhoto: true });
        this.props.registEvent("link", {
            image: image
        });
    };

    render() {
        return (
            <div>
                <h3>URL</h3>
                <input type="text" ref="url" placeholder="이미지 URL" /> 
                <button onClick={this.urlUploader}>업로드</button>
                {
                    this.state.isPhoto ? <img src={this.state.photo} alt="사진" /> : "URL이 정확하면 이미지를 미리 볼 수 있습니다"
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
})

export default connect(mapStateToProps)(Main);