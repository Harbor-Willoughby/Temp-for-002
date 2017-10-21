import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScwrapPeople from '../image/accountIcon.png';
import Voucher1 from './image/voucher1.png';
import Voucher2 from './image/voucher2.png';
import Voucher3 from './image/voucher3.png';
import BtnDown from './image/btn-down.png';
import BtnView from './image/btn-view.png';
import BgPlus from './image/bg-plus.png';
import VoucherImage from './image/voucher-image.jpeg';
import _ from 'lodash';
import './Voucher.css';

const propTypes = {};

const defaultProps = {};

class Voucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isView: false,
    };
  }

  componentDidMount() {}

  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  handleView = () => {
    this.setState({
      isView: !this.state.isView
    });
  };

  onBlur = () => {
    if(this.state.isView) {
      this.setState({
        isView: !this.state.isView
      });
      return;
    }
    if(this.state.isActive) {
      this.setState({
        isActive: !this.state.isActive
      });
    }
  };

  render() {
    const vouchers = [
      { id: 1, name: '파리 유람선 예약', date: '2017-10-21', image: Voucher1 },
      { id: 2, name: '파리 유람선 예약', date: '2017-10-21', image: Voucher2 },
      { id: 3, name: '루브르 뮤지엄 예약', date: '2017-10-23', image: Voucher3 },
    ];
    return (
        <div className="voucher-wrapper">
          { this.state.isView && <div className="voucher-detail-view"><img alt="" src={ VoucherImage } /></div> }
          { this.state.isActive && <div onClick={ this.onBlur } className="voucher-wrapper-shadow"></div> }
          <div className="logo">
            Scwrap
          </div>
          <div className="people">
            <img alt="" src={ ScwrapPeople } />
          </div>
          <div className="content">
            <div className="scroll-horizonal">
            {
              _.map(vouchers, voucher => {
                if(voucher.id == 1 && this.state.isActive) {
                  return (<div key={ voucher.id } className="voucher-box-active">
                    <div className="title1">
                      0{ voucher.id }
                    </div>
                    <img alt="" src={ voucher.image } />
                    <div className="title2">
                      { voucher.name }
                    </div>
                    <div className="title3">
                      2017 . 10 . 21  SAT 20:00<br />
                      Champ de Mars, Paris
                    </div>
                    <div className="button">
                      <span onClick={ this.handleView }>View <img alt="" src={ BtnView } /></span><span>Download<img alt="" src={ BtnDown } /></span>
                    </div>
                  </div>)
                }
                return (<div key={ voucher.id } className="voucher-box" onClick={ this.handleClick }>
                  <div className="voucher-box-header"></div>
                  <img alt="" src={ voucher.image } />
                  <div className="voucher-box-footer">
                    <div className="title1">
                      0{ voucher.id }
                    </div>
                    <div className="title2">
                      { voucher.name }<br />
                      { voucher.date }
                    </div>
                  </div>
                </div>);
              })
            }
            <div className="voucher-box">
              <img alt="" src={ BgPlus } />
            </div>
            </div>
          </div>
          <div className="footer"></div>
          <div className="circle1-box">
            <div>Day 1</div>
            <div className="circle1"></div>
          </div>
          <div className="circle2-box">
            <div>Day 3</div>
            <div className="circle2"></div>
          </div>
        </div>
    );
  }
}

Voucher.propTypes = propTypes;
Voucher.defaultProps = defaultProps;

export default Voucher;