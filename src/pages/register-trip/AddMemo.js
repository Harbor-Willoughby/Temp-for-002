import React from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import {
  connect,
} from 'react-redux';

class Memo extends React.Component {
    render() {
        return (
            <div>
                <strong>{this.props.title}</strong><br />
                <p>{this.props.text}</p>
            </div>
        );
    }
}

class InputMemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",
        };
    }

    render() {
        return (<div>
            <input type="text" placeholder="제목" value={this.state.title} onChange={e => this.setState({title: e.target.value})} /> 
            <input type="text" placeholder="내용" value={this.state.text} onChange={e => this.setState({text: e.target.value})} /> 
            <button onClick={()=>this.props.uploadMemo(this.state.title, this.state.text)}>입력</button>
        </div>);
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memos: null
        };
    }

    componentDidMount() {
        let list = this.props.typeEvents.memo;
        
        this.setState({memos: list});
    }
    
    uploadMemo = (title, text) => {
        let list = this.state.memos;
        
        this.setState({memos: list});

        this.props.registEvent("memo", {
            title: title,
            text: text
        });
    };

    render() {
        let elements = [];

        if (this.state.memos != null) {
            for (let i = 0; i < this.state.memos.length; i ++) {
                let memo = this.state.memos[i];
                elements.push(<Memo key={i} title={memo.title} text={memo.text} />);
            }
        }

        this.state.memos
        return (
            <div>
                <h2>메모를 첨부하세요</h2>
                {
                    elements
                }
                <br />
                <InputMemo registEvent={this.props.registEvent} uploadMemo={this.uploadMemo} />
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