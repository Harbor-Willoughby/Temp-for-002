import React from 'react'
import firebase from '../../firebase';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

export default class Event extends React.Component {
  constructor(props) {
	super(props);
	console.log('trip_id : ');
	console.log(props.trip_id);
    this.state = {
    	tevent: undefined,
    };
  }

  componentDidMount = () => {
  	var id = this.props.trip_id;
  	console.log('id : ' + id);

	firebase.database().ref('/events').orderByChild("pair_key").equalTo(id).on("value", data => {
		this.setState({
			tevent: map(data.val(), (trip, key) => ({ id: key, ...trip })),
		})
	});
  }

  handleSubmit(event) {
    event.preventDefault();
    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    firebase.database().ref('/events').push({
      pair_key: this.props.trip_id,
      title: text,
      posted_by: {
        name: '빌드002',
        photoUrl: 'https://image.com',
      },
      startDate: '2017-10-31',
      endDate: '2017-11-03',
      thumbnailImageUrl: 'https://image.com',
      createdAt: new Date().toString()
    })
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  render() {
	return (
	  <div>
		add Event
			<form className="new-event" onSubmit={this.handleSubmit.bind(this)} >

				<input

				type="text"

				ref="textInput"

				placeholder="Type to add new events"

				/>

			</form>
        <div>
          {isEmpty(this.state.tevent) ? (
              <div>
                데이터 로딩중
              </div>
            ) : 
            this.state.tevent.map((event) => {
                return (
                  <div key={event.id}>
                    <h1>이벤트 제목 : {event.title}</h1>
                    <p>(Pair Key: {event.pair_key})</p>
                  </div>
                )
              })
          }
        </div>
	  </div>
	);
  }
}
