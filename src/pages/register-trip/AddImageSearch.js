import React from 'react';
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import {
  connect,
} from 'react-redux';

const IMAGE_WIDTH = 233;
const IMAGE_HEIGHT = 222;

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            text: "",
            photos: null,
        };
    }

    componentDidMount() {
        console.log(this.props.typeEvents)
    }

    searchImage = () => {
        let text = this.state.text;

        // const pageDOM = ReactDOM.findDOMNode(this.refs.page);
        let page = 1;//pageDOM.value.trim();

        const API_KEY = "AIzaSyCU03su66ziXV0bwEW2SWisrKT61JdyOvE";
        const API_ID = "007912717314554625778:w6rqq0udw3s";
        const API_URL = "https://www.googleapis.com/customsearch/v1?key=API_KEY&cx=API_ID&q=SEARCH_TEXT&searchType=image&start=PAGE_NUM";

        let url = API_URL.replace("API_KEY", API_KEY).replace("API_ID", API_ID).replace("SEARCH_TEXT", text).replace("PAGE_NUM", page);

        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    console.log('Error Status Code: ' + res.status);
                    return;
                }
            
                // Examine the text in the response
                res.json().then(data => {
                    // console.log(data);
                    console.log(data.items);

                    this.setState({
                        photos: map(data.items, (photo, key) => ({ id: key, ...photo })),
                    });
                });
            });
    }
    
    uploadImage = (image) => {
        this.setState({ photo: image, isPhoto: true });
        this.props.registEvent("search", {
            image: image,
            keyword: this.state.text
        });
    };

    render() {
        return (
            <div>
                <h3>이미지 검색</h3>
                <input type="text" ref="search" placeholder="" value={this.state.text} onChange={e => this.setState({text: e.target.value})} /> 
                <button onClick={()=>this.searchImage()}>검색</button>
                <div className="photos">
                    {
                        isEmpty(this.state.photos) ? (
                            <div>
                                데이터 없음
                            </div>
                            ) : this.state.photos.map((photo) => {
                            return (
                                <button key={photo.id} onClick={()=>this.uploadImage(photo.link)}>
                                    <img 
                                        src={photo.link} 
                                        width={IMAGE_WIDTH}
                                        height={IMAGE_HEIGHT}
                                        alt={photo.snippet} 
                                    />
                                </button>
                            )
                        })
                    }
                </div>
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