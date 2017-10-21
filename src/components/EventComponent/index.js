import React from 'react'



// 반드시 DayComponent의 자식 형태로 사용되어야 함
export default class EventComponent extends React.Component {
  renderImageType = () => {
    return (
      <a href="images/gallery/fulls/01.jpg" className="image filtered span-3" data-position="bottom"><img src="images/gallery/thumbs/01.jpg" alt="" /></a>
    )
  }

  renderLinkType = () => {
    return (
      <div className="group span-4-5">
        <a href="images/gallery/fulls/05.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
        <a href="images/gallery/fulls/06.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/06.jpg" alt="" /></a>
        <a href="images/gallery/fulls/07.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
        <a href="images/gallery/fulls/08.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/08.jpg" alt="" /></a>
      </div>
    )
  }

  render() {
    if (this.props.type === 'image') {
      return this.renderImageType();
    }
    if (this.props.type === 'link') {
      return this.renderLinkType();
    }
    return null;
  }
}
