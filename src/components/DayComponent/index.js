// Day에 대한 Component
// 용법
// <Day dayNumber={1}>
//   <Event type="link" />
// </Day>
// <Day dayNumber={2}>
//   <Event type="image" />
// </Day>

import React from 'react'


export default class DayComponent extends React.Component {
  render() {
    return (
      <section className="panel">
        <div className="text-intro">
          <h2 className="major">DAY {this.props.dayNumber}</h2>
        </div>
        <div className="gallery">
          {this.props.children}
        </div>
      </section>
    );
  }
}
