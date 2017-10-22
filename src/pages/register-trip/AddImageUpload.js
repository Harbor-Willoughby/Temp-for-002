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

    // 파일 업로더 
    fileUploader = (e) => {
        const file = e.target.files[0];
        const path = 'temp';

        let storageRef = firebase.storage().ref(path).child(file.name);
        let task = storageRef.put(file);

        this.setState({isPhoto: false});
        task.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
            let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;   
        
            if (progress == 100) {
                this.uploadComplete(snapshot.downloadURL);
            }
          }, function error(err) {
        
          },function complete() {
            
          });
    }

    uploadComplete = (image) => {
        this.setState({ photo: image, isPhoto: true });
        this.props.registEvent("upload", {
            image: image
        });
    };

    render() {
        return (
            <div>
                <h3>
                <input type="file" ref="files" onChange={this.fileUploader} /> 
                </h3>
                {
                    this.state.isPhoto ? <img src={this.state.photo} alt="사진" /> : null
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