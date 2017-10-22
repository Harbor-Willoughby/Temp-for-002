import React from 'react'
import firebase from '../firebase';
import ReactDOM from 'react-dom';
import {
  connect,
} from 'react-redux';



class Upload extends React.Component {
    // 파일 업로더
    fileUploader = (e) => {
        const file = e.target.files[0];
        const path = 'temp';

        let storageRef = firebase.storage().ref(path).child(file.name);
        let task = storageRef.put(file);

        task.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log(progress)
          }, function error(err) {

          },function complete() {

          });
    }

    // 이미지 URL 을 통한 파일 업로더
    urlUploader = () => {
        const urlDOM = ReactDOM.findDOMNode(this.refs.url);
        const path = 'temp';

        let imageURL = urlDOM.value.trim();
        let imageName = imageURL.match(/\w+\.[A-Za-z]{3,4}(?=\?|$)/g)[0];
        //let imageName = imageURL.split(",")[1]; // 구글 이미지 주소에서 이름 가져오는 부분 문제 =

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
                    console.log(progress)
                }, function error(err) {

                },function complete() {

                });
            });
    }

    dataURLtoBlob = (dataurl) => {
        let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type:mime});
    }


    render() {
        return (
            <div>
                Upload
                <br/>
                <input type="file" ref="files" onChange={this.fileUploader} />
                <br />
                <input type="text" ref="url" placeholder="이미지 URL" />
                <button onClick={this.urlUploader}>업로드</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.name,
  name: state.auth.name,
  email: state.auth.email,
  profileImageUrl: state.auth.profileImageUrl,
})

export default connect(mapStateToProps)(Upload);