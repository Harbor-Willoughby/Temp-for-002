import React from 'react';
import ReactDOM from 'react-dom';
import {
  connect,
} from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h2>파일을 업로드하세요</h2>
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