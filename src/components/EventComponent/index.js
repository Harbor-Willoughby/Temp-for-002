import React from 'react'



// 반드시 DayComponent의 자식 형태로 사용되어야 함
export default class EventComponent extends React.Component {
  renderImageType = () => {
    let event = this.props.event;
    let className = "image filtered " + this.props.classType;
    
    return (
      <img style={{
          backgroundImage: `url(${event.image})`
        }} className={className} alt={event.createAt} />
    )
  }
  
    renderLinkType = () => {
      let className = "image filtered " + this.props.classType;
      
      return (
        <a href="images/gallery/fulls/05.jpg" className={className} data-position="top"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
      )
    }
    
      renderMemoType = () => {
        let className = "image filtered " + this.props.classType;
        let event = this.props.event;

        return (
          <div><strong>{event.title}</strong></div>
        )
      }

  render() {

console.log(this.props.event);
    if (this.props.type === 'memo') {
      return this.renderMemoType();
    } else {
      return this.renderImageType();
    }

    
    return null;
  }
}
