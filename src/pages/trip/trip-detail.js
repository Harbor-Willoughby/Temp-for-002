import React, {Component} from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase';
import map from 'lodash/map';
import { objectValue } from '../../util/objectUtill';
import Event from '../../components/event/event';

const propTypes = {};
const defaultProps = {};

class TripDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	trip: undefined,
    };
  }

  componentDidMount = () => {
  	var id = this.props.match.params.tripId;
  	console.log('id : ' + id);
    firebase.database().ref('/trips/' + id).once('value').then((snapshot) => {
    	this.setState({
    		trip: snapshot.val()
    	});
	});
  }

  render() {
    return (
      <div id="page-wrapper">
    {/* Page Wrapper */}

        {/* Wrapper */}
          <div id="wrapper">

            {/* Panel */}
              <section className="panel">
                <div className="intro color2">
                  <h2 className="major">Elit integer</h2>
                  <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                </div>
                <div className="gallery">
                  <div className="group span-3">
                    <a href="images/gallery/fulls/01.jpg" className="image filtered span-3" data-position="bottom"><img src="images/gallery/thumbs/01.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/02.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/02.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/03.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/03.jpg" alt="" /></a>
                  </div>
                  <a href="images/gallery/fulls/04.jpg" className="image filtered span-2-5" data-position="top"><img src="images/gallery/thumbs/04.jpg" alt="" /></a>
                  <div className="group span-4-5">
                    <a href="images/gallery/fulls/05.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/06.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/06.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/07.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
                    <a href="images/gallery/fulls/08.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/08.jpg" alt="" /></a>
                  </div>
                  <a href="images/gallery/fulls/09.jpg" className="image filtered span-2-5" data-position="right"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
                </div>
              </section>

            {/* Elements Panel 
              <section className="panel color2-alt">
                <div className="intro color2">
                  <h2 className="major">Elements</h2>
                  <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam. </p>
                </div>
                <div className="inner columns aligned">
    
                  <div className="span-1-25">

                    <h3 className="major">Lists</h3>

                    <h4>Unordered</h4>
                    <ul>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis viverra.</li>
                    </ul>

                    <h4>Alternate</h4>
                    <ul className="alt">
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis viverra.</li>
                      <li>Felis enim feugiat.</li>
                    </ul>

                  </div>
                  <div className="span-1-5">

                    <h4>Ordered</h4>
                    <ol>
                      <li>Lorem ipsum dolor sit.</li>
                      <li>Dolor pulvinar etiam.</li>
                      <li>Etiam vel felis viverra.</li>
                      <li>Felis enim feugiat.</li>
                      <li>Etiam vel felis lorem.</li>
                    </ol>

                    <h4>Actions</h4>
                    <ul className="actions">
                      <li><a href="#" className="button special color2">Default</a></li>
                      <li><a href="#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions vertical">
                      <li><a href="#" className="button special color2">Default</a></li>
                      <li><a href="#" className="button">Default</a></li>
                    </ul>

                  </div>
                  <div className="span-1-25">

                    <h4>Icons</h4>
                    <ul className="icons">
                      <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                      <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                      <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                      <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
                      <li><a href="#" className="icon fa-medium"><span className="label">Medium</span></a></li>
                    </ul>

                    <h4>Contact Icons</h4>
                    <ul className="contact-icons color2">
                      <li className="icon fa-twitter"><a href="#">Twitter</a></li>
                      <li className="icon fa-facebook"><a href="#">Facebook</a></li>
                      <li className="icon fa-instagram"><a href="#">Instagram</a></li>
                      <li className="icon fa-github"><a href="#">GitHub</a></li>
                      <li className="icon fa-medium"><a href="#">Medium</a></li>
                    </ul>

                  </div>

                  <div className="span-2-25">
                    <h3 className="major">Buttons</h3>
                    <ul className="actions">
                      <li><a href="#" className="button special color2">Special</a></li>
                      <li><a href="#" className="button">Default</a></li>
                    </ul>
                    <ul className="actions">
                      <li><a href="#" className="button">Default</a></li>
                      <li><a href="#" className="button large">Large</a></li>
                      <li><a href="#" className="button small">Small</a></li>
                    </ul>
                    <ul className="actions">
                      <li><a href="#" className="button special color2 icon fa-cog">Icon</a></li>
                      <li><a href="#" className="button icon fa-diamond">Icon</a></li>
                    </ul>
                    <ul className="actions">
                      <li><span className="button special color2 disabled">Disabled</span></li>
                      <li><span className="button disabled">Disabled</span></li>
                    </ul>
                    <ul className="actions">
                      <li><a href="#" className="button special color2 circle icon fa-cog">Icon</a></li>
                      <li><a href="#" className="button circle icon fa-diamond">Icon</a></li>
                    </ul>
                  </div>
                </div>
              </section>
            */}
            {/* Copyright */}
              <div className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

          </div>

      </div>
    );
  }
}

TripDetail.propTypes = propTypes;
TripDetail.defaultProps = defaultProps;

export default TripDetail;