import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const propTypes = {};

const defaultProps = {};

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/main">
                Main
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/voucher">
                Voucher
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/trip/create/register">
                Register
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;