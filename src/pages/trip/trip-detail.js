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

            {/* Panel (Banner) */}
              <section className="panel banner right">
                <div className="content color0 span-3-75">
                  <h1 className="major">Hello, my name<br />
                  is Ethereal</h1>
                  <p>This is <strong>Ethereal</strong>, a free site template by AJ htmlFor <a href="https://html5up.net">HTML5 UP</a>. It’s fully responsive, built on HTML5 and CSS3, and released entirely htmlFor free under the Creative Commons license. Hope you dig it :)</p>
                  <ul className="actions">
                    <li><a href="#first" className="button special color1 circle icon fa-angle-right">Next</a></li>
                  </ul>
                </div>
                <div className="image filtered span-1-75" data-position="25% 25%">
                  <img src="images/pic01.jpg" alt="" />
                </div>
              </section>

            {/* Panel (Spotlight) */}
              <section className="panel spotlight medium right" id="first">
                <div className="content span-7">
                  <h2 className="major">Sed etiam aenean</h2>
                  <p>Mauris et ligula arcu. Proin dapibus convallis accumsan. Lorem maximus hendrerit orci, sit amet elementum massa hendrerit sed. Donec et ullamcorper ligula. Suspendisse amet potenti. Ut pretium libero eleifend euismod sed tristique. Quisque dictum magna risus, id ultricies justo sagittis vitae. Sed id odio tempor, porttitor elit amet, gravida hendrerit fringilla lorem ipsum dolor.</p>
                </div>
                <div className="image filtered tinted" data-position="top left">
                  <img src="images/pic02.jpg" alt="" />
                </div>
              </section>

            {/* Panel */}
              <section className="panel color1">
                <div className="intro joined">
                  <h2 className="major">Amet lorem</h2>
                  <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                </div>
                <div className="inner">
                  <ul className="grid-icons three connected">
                    <li><span className="icon fa-diamond"><span className="label">Lorem</span></span></li>
                    <li><span className="icon fa-camera-retro"><span className="label">Ipsum</span></span></li>
                    <li><span className="icon fa-cog"><span className="label">Dolor</span></span></li>
                    <li><span className="icon fa-paper-plane"><span className="label">Sit</span></span></li>
                    <li><span className="icon fa-bar-chart"><span className="label">Amet</span></span></li>
                    <li><span className="icon fa-code"><span className="label">Nullam</span></span></li>
                  </ul>
                </div>
              </section>

            {/* Panel (Spotlight) */}
              <section className="panel spotlight large left">
                <div className="content span-5">
                  <h2 className="major">Magna amet tempus</h2>
                  <p>Mauris a cursus velit. Nunc lacinia sollicitudin egestas bibendum, magna dui bibendum ex, sagittis commodo enim risus sed magna nulla. Vestibulum ut consequat velit. Curabitur vitae libero lorem. Quisque iaculis porttitor blandit. Nullam quis sagittis maximus. Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar.</p>
                </div>
                <div className="image filtered tinted" data-position="top right">
                  <img src="images/pic03.jpg" alt="" />
                </div>
              </section>

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

            {/* Panel */}
              <section className="panel color4-alt">
                <div className="intro color4">
                  <h2 className="major">Contact</h2>
                  <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
                </div>
                <div className="inner columns divided">
                  <div className="span-3-25">
                    <form method="post" action="#">
                      <div className="field half">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                      </div>
                      <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                      </div>
                      <ul className="actions">
                        <li><input type="submit" value="Send Message" className="button special" /></li>
                      </ul>
                    </form>
                  </div>
                  <div className="span-1-5">
                    <ul className="contact-icons color1">
                      <li className="icon fa-twitter"><a href="#">@untitled-tld</a></li>
                      <li className="icon fa-facebook"><a href="#">facebook.com/untitled</a></li>
                      <li className="icon fa-snapchat-ghost"><a href="#">@untitled-tld</a></li>
                      <li className="icon fa-instagram"><a href="#">@untitled-tld</a></li>
                      <li className="icon fa-medium"><a href="#">medium.com/untitled</a></li>
                    </ul>
                  </div>
                </div>
              </section>

            {/* Panel */}
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
                  <div className="span-3">
                    <h3 className="major">Table</h3>
                    <h4>Default</h4>
                    <div className="table-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                          </tr>
                          <tr>
                            <td>Item Two</td>
                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                            <td>19.99</td>
                          </tr>
                          <tr>
                            <td>Item Three</td>
                            <td> Morbi faucibus arcu accumsan lorem.</td>
                            <td>29.99</td>
                          </tr>
                          <tr>
                            <td>Item Four</td>
                            <td>Vitae integer tempus condimentum.</td>
                            <td>19.99</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="2"></td>
                            <td>100.00</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="span-3">
                    <h4>Alternate</h4>
                    <div className="table-wrapper">
                      <table className="alt">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Item One</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                          </tr>
                          <tr>
                            <td>Item Two</td>
                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                            <td>19.99</td>
                          </tr>
                          <tr>
                            <td>Item Three</td>
                            <td> Morbi faucibus arcu accumsan lorem.</td>
                            <td>29.99</td>
                          </tr>
                          <tr>
                            <td>Item Four</td>
                            <td>Vitae integer tempus condimentum.</td>
                            <td>19.99</td>
                          </tr>
                          <tr>
                            <td>Item Five</td>
                            <td>Ante turpis integer aliquet porttitor.</td>
                            <td>29.99</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="2"></td>
                            <td>100.00</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
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
                  <div className="span-4-5">
                    <h3 className="major">Form</h3>
                    <form method="post" action="#">
                      <div className="field third">
                        <label htmlFor="demo-name">Name</label>
                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Jane Doe" />
                      </div>
                      <div className="field third">
                        <label htmlFor="demo-email">Email</label>
                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="jane@untitled.tld" />
                      </div>
                      <div className="field third">
                        <label htmlFor="demo-category">Category</label>
                        <div className="select-wrapper">
                          <select name="demo-category" id="demo-category">
                            <option value="">-</option>
                            <option value="1">Manufacturing</option>
                            <option value="1">Shipping</option>
                            <option value="1">Administration</option>
                            <option value="1">Human Resources</option>
                          </select>
                        </div>
                      </div>
                      <div className="field quarter">
                        <input type="radio" id="demo-priority-low" name="demo-priority" className="color2" />
                        <label htmlFor="demo-priority-low">Low Priority</label>
                      </div>
                      <div className="field quarter">
                        <input type="radio" id="demo-priority-high" name="demo-priority" className="color2" />
                        <label htmlFor="demo-priority-high">High Priority</label>
                      </div>
                      <div className="field quarter">
                        <input type="checkbox" id="demo-copy" name="demo-copy" className="color2" />
                        <label htmlFor="demo-copy">Email a copy</label>
                      </div>
                      <div className="field quarter">
                        <input type="checkbox" id="demo-human" name="demo-human" className="color2" />
                        <label htmlFor="demo-human">Not a robot</label>
                      </div>
                      <div className="field">
                        <label htmlFor="demo-message">Message</label>
                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="2"></textarea>
                      </div>
                      <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special color2" /></li>
                        <li><input type="reset" value="Reset" /></li>
                      </ul>
                    </form>
                  </div>
                </div>
              </section>

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